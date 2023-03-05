import { useState, useEffect, useRef, useContext, Fragment } from "react";
// import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from "./ProfileForm.module.css";
import "./img.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parseISO } from "date-fns";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import zh from "date-fns/locale/zh-CN";
registerLocale("zh", zh);

const { REACT_APP_IP_ADDRESS, REACT_APP_PORT } = process.env;

const ProfileForm = (props) => {
  // const history = useHistory();
  const NameInputRef = useRef();
  const NickNameInputRef = useRef();
  const DescriptionInputRef = useRef();
  const WechatInputRef = useRef();
  // const GenderInputRef = useRef();
  const [gender, setGender] = useState("");
  const [userId, setUserId] = useState("");
  const MarriageTimesInputRef = useRef();
  const DatePickerRef = useRef();
  const PhoneInputRef = useRef();
  const authCtx = useContext(AuthContext);
  // console.log('my id is:' + authCtx.id);

  async function submitHandler(event) {
    console.log("in submit handler");
    event.preventDefault();
    const AddedIds = [];
    console.log(images);

    for (const [index, image] of images.entries()) {
      // console.log(image);
      // console.log(index);
      if (image.length < 1) {
        //pass
        AddedIds[index] = -1;
      } else {
        const fd = new FormData();
        fd.append("file", image[0]);
        const headers = { token: authCtx.token };
        const promis = await axios.post(
          `https://${REACT_APP_IP_ADDRESS}:${REACT_APP_PORT}/file/upload`,
          fd,
          {
            headers: headers,
          }
        );

        const imgId = promis.data.data.id;
        // const url = promis.data.data.url;
        AddedIds[index] = imgId;
      }
    }
    console.log(AddedIds);

    const pms = await fetch(
      `https://${REACT_APP_IP_ADDRESS}:${REACT_APP_PORT}/user/detail?targetId=${authCtx.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: authCtx.token,
        },
      }
    );

    // console.log("got user details");
    const js = await pms.json();
    let userDetail = js.data;
    const newIds = [-1, -1, -1, -1, -1, -1];
    const baseIds = userDetail.album.split(";");
    const oldIds = [-1, -1, -1, -1, -1, -1];
    //old ids
    for (const [index, id] of baseIds.entries()) {
      if (index < 6) {
        oldIds[index] = id;
      }
    }

    for (const [index, id] of AddedIds.entries()) {
      if (id > -1) {
        newIds[index] = id;
      } else {
        newIds[index] = oldIds[index];
      }
    }

    let stringIds = "";
    for (const id of newIds) {
      if (id > -1) {
        stringIds = stringIds + id + ";";
      }
    }

    userDetail.album = stringIds;
    // userDetail.album = "";
    userDetail.name = NameInputRef.current.value;
    userDetail.nickname = NickNameInputRef.current.value;
    userDetail.intro = DescriptionInputRef.current.value;
    // userDetail.gender = GenderInputRef.current.value;
    userDetail.married = MarriageTimesInputRef.current.value;
    userDetail.telephone = PhoneInputRef.current.value;
    const dat = new Date(selectedDate);
    const y = dat.getFullYear().toString();
    const m = dat.getMonth() + 1;
    let ms;
    if (m < 10) {
      ms = "0" + m.toString();
    } else {
      ms = m.toString();
    }
    const d = dat.getDate();
    let ds;
    if (d < 10) {
      ds = "0" + d.toString();
    } else {
      ds = d.toString();
    }
    console.log("in upload birthdate, new birthdate is:");
    console.log(`${y}-${ms}-${ds}`);
    // userDetail.birthdate = new Date(selectedDate);
    userDetail.birthdate = `${y}-${ms}-${ds}`;
    console.log("final string Ids is");
    console.log(stringIds);
    // userDetail.album = userDetail.album + `;${imgId}`;
    const jsobj = JSON.stringify(userDetail);
    props.onUpdate();
    fetch(`http://${REACT_APP_IP_ADDRESS}:${REACT_APP_PORT}/user/update/`, {
      method: "PUT",
      body: jsobj,
      headers: {
        "Content-Type": "application/json",
        token: authCtx.token,
      },
    })
      .then((res) => {
        if (res.ok) {
          //...success response
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  const [image1, setImage1] = useState([]);
  const [imageURL1, setImageURL1] = useState([]);
  const [image2, setImage2] = useState([]);
  const [imageURL2, setImageURL2] = useState([]);
  const [image3, setImage3] = useState([]);
  const [imageURL3, setImageURL3] = useState([]);
  const [image4, setImage4] = useState([]);
  const [imageURL4, setImageURL4] = useState([]);
  const [image5, setImage5] = useState([]);
  const [imageURL5, setImageURL5] = useState([]);
  const [image6, setImage6] = useState([]);
  const [imageURL6, setImageURL6] = useState([]);

  function onImageChange1(e) {
    setImage1((image) => {
      return [...e.target.files];
    });
  }
  function onImageChange2(e) {
    setImage2((image) => {
      return [...e.target.files];
    });
  }
  function onImageChange3(e) {
    setImage3((image) => {
      return [...e.target.files];
    });
  }
  function onImageChange4(e) {
    setImage4((image) => {
      return [...e.target.files];
    });
  }
  function onImageChange5(e) {
    setImage5((image) => {
      return [...e.target.files];
    });
  }
  function onImageChange6(e) {
    setImage6((image) => {
      return [...e.target.files];
    });
  }

  const newImageUrls = [
    imageURL1,
    imageURL2,
    imageURL3,
    imageURL4,
    imageURL5,
    imageURL6,
  ];

  const images = [image1, image2, image3, image4, image5, image6];

  useEffect(() => {
    console.log("image change side effect");
    images.forEach((image, index) => {
      if (image.length < 1) {
        //pass
      } else {
        newImageUrls[index] = URL.createObjectURL(image[0]);
      }
    });
    setImageURL1(newImageUrls[0]);
    setImageURL2(newImageUrls[1]);
    setImageURL3(newImageUrls[2]);
    setImageURL4(newImageUrls[3]);
    setImageURL5(newImageUrls[4]);
    setImageURL6(newImageUrls[5]);
  }, [image1, image2, image3, image4, image5, image6]);

  useEffect(() => {
    // console.log("in useEffect for getting phtots from database")
    fetch(
      `https://${REACT_APP_IP_ADDRESS}:${REACT_APP_PORT}/user/detail?targetId=${authCtx.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: authCtx.token,
        },
      }
    ) //promise
      .then((res) => {
        if (res.ok) {
          //...success response
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((res) => {
        console.log(res.data);
        const imgArray = res.data.albums.split(";");
        NameInputRef.current.value = res.data.name;
        NickNameInputRef.current.value = res.data.nickname;
        DescriptionInputRef.current.value = res.data.intro;
        WechatInputRef.current.value = res.data.wechat;
        // GenderInputRef.current.value = res.data.gender;
        setGender(res.data.gender);
        setUserId(res.data.id);
        PhoneInputRef.current.value = res.data.telephone;
        const dat = new Date(res.data.birthdate);
        const y = dat.getFullYear().toString();
        const m = dat.getMonth() + 1;
        let ms;
        if (m < 10) {
          ms = "0" + m.toString();
        } else {
          ms = m.toString();
        }
        const d = dat.getDate();
        let ds;
        if (d < 10) {
          ds = "0" + d.toString();
        } else {
          ds = d.toString();
        }
        console.log(`${y}-${ms}-${ds}`);

        setSelectedDate(parseISO(`${y}-${ms}-${ds}`));

        const ageDifMs = Date.now() - dat;
        const ageDate = new Date(ageDifMs);
        console.log("age is : ");
        console.log(Math.abs(ageDate.getUTCFullYear() - 1970));

        // imgArray.forEach((img) => console.log(img));
        // const indices = res.data.album.split(";");
        // // console.log(indices);
        // let ordArray = [];
        // indices.forEach((element, index) => {
        //   ordArray[element - 1] = imgArray[index];
        // });
        // console.log(ordArray);
        const ordArray = imgArray;
        ordArray[0] && setImageURL1(ordArray[0]);
        ordArray[1] && setImageURL2(ordArray[1]);
        ordArray[2] && setImageURL3(ordArray[2]);
        ordArray[3] && setImageURL4(ordArray[3]);
        ordArray[4] && setImageURL5(ordArray[4]);
        ordArray[5] && setImageURL6(ordArray[5]);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [authCtx.token]);

  // const onSubmitHandler = () => {
  //   const fd = new FormData();
  //   fd.append("file", image1);
  //   axios.post("http://localhost:9090/file/upload", fd).then((res) => {
  //     console.log(res);
  //   });
  // };

  const [selectedDate, setSelectedDate] = useState(null);
  // console.log("datepicker selecteddate")
  // console.log(selectedDate)
  // console.log("js Date value from selectedDate")
  // console.log(new Date(selectedDate))
  // const sDate = new Date(selectedDate)
  // const Month = sDate.getMonth() + 1;
  // console.log(sDate.getFullYear() + "-" +Month+ "-" +sDate.getDate());

  return (
    <form
      className={classes.form}
      onSubmit={submitHandler}
      autoComplete="off"
    >
      <div className={classes.control}>
        <label htmlFor="new-name">昵称</label>
        <input type="text" id="inputNickNmae" ref={NickNameInputRef} />
      </div>
      <div>
        {gender==1 && <label htmlFor="genders"> 性别: 女</label>}
        {gender==0 && <label htmlFor="genderes"> 性别: 男</label>}
      </div>
      <div>
        <label htmlFor="new-name">用户id: {userId}</label>
      </div>
      <div>
        <label htmlFor="marriageTimes">婚姻次数</label>\{" "}
        <select
          id="marriageTimes"
          name="marriageTimes"
          ref={MarriageTimesInputRef}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
        </select>
      </div>
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          ref={DatePickerRef}
          dateFormat="yyyy/MM/dd"
          maxDate={new Date()}
          showYearDropdown
          scrollableYearDropdown
          locale="zh"
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="new-name">姓名(仅于匹配后显示)</label>
        <input type="text" id="inputNmae" ref={NameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="new-name">微信号(仅于匹配后显示)</label>
        <input type="text" id="inputWechat" ref={WechatInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="new-description">简介</label>
        <textarea
          name="Text1"
          cols="47"
          rows="10"
          ref={DescriptionInputRef}
        ></textarea>
      </div>
      <div>
        <div className={classes.control}>
          <label htmlFor="new-phone">手机号(仅于匹配后显示)</label>
          <input type="number" id="inputPhone" ref={PhoneInputRef} />
        </div>
      </div>
      <input type="file" accept="image/*" onChange={onImageChange1} />
      <div>
        <img className="img" src={imageURL1} alt="" />
      </div>
      <input type="file" accept="image/*" onChange={onImageChange2} />
      <div>
        <img className="img" src={imageURL2} alt="" />
      </div>
      <input type="file" accept="image/*" onChange={onImageChange3} />
      <div>
        <img className="img" src={imageURL3} alt="" />
      </div>
      <input type="file" accept="image/*" onChange={onImageChange4} />
      <div>
        <img className="img" src={imageURL4} alt="" />
      </div>
      <input type="file" accept="image/*" onChange={onImageChange5} />
      <div>
        <img className="img" src={imageURL5} alt="" />
      </div>
      <input type="file" accept="image/*" onChange={onImageChange6} />
      <div>
        <img className="img" src={imageURL6} alt="" />
      </div>
      <div className={classes.action}>
        <button>更新</button>
      </div>
    </form>
  );
};

export default ProfileForm;

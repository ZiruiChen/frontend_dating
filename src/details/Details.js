import Card from "../components/UI/Card";
import { Fragment, useContext, useEffect, useState } from "react";
import "./Details.css";
import AuthContext from "../store/auth-context";
const { REACT_APP_IP_ADDRESS, REACT_APP_PORT } = process.env;


const Details = (props) => {
  const authCtx = useContext(AuthContext);
  const [loadedData, setLoadedData] = useState(null);

  useEffect(() => {
    console.log("use effect is run");
    fetch(`https://${REACT_APP_IP_ADDRESS}:${REACT_APP_PORT}/user/detail?targetId=${props.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: authCtx.token,
      },
    }) //promise
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
        // console.log(res.data);
        console.log(res);
        // console.log(data.data.data)
        setLoadedData(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [authCtx.token]);

  let imgArray;

  if (loadedData) {
    imgArray = loadedData.albums.split(";");
    console.log(imgArray);
  }

  const onInvite = () => {
    fetch(`https://${REACT_APP_IP_ADDRESS}:${REACT_APP_PORT}/invitation/add?targetId=${props.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: authCtx.token,
      },
    }) //promise
    .then((res) => {
      if (res.ok) {
        //...success response
        props.onInvited();
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
      // console.log(res.data);
      console.log(res);
      // console.log(data.data.data)
      // setLoadedData(res.data);
    })
    .catch((err) => {
      alert(err.message);
    });
  }

  //fetch details by id
  if (loadedData) {
    return (
      <Fragment>
        <header className="details-header">{loadedData.nickname}</header>
        <Card className="details-instance">
          <div className="details-instance__description">
            {/* <img
              className="details-instance__img"
              src={loadedData.icon}
              alt=""
            /> */}
            {imgArray &&
              imgArray.map((img, index) => (
                <img
                  key={index}
                  className="details-instance__img"
                  src={img}
                  alt=""
                />
              ))}
            <div className="details-instance__age">
              生日: {loadedData.birthdate}
            </div>
            <div className="details-instance__age">
              婚姻次数: {loadedData.married}
            </div>
            <div className="details-instance__age">{loadedData.intro}</div>
            <button className="button" onClick={onInvite}>邀约</button>
          </div>
        </Card>
      </Fragment>
    );
  }
};

export default Details;

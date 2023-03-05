import { Fragment, useContext, useEffect, useState } from "react";
import Instance from "../candidates/Instance";
import AuthContext from "../store/auth-context";
import "./BeInvitedList.css";

const { REACT_APP_IP_ADDRESS, REACT_APP_PORT } = process.env;

const BeInvitedList = () => {
  const [loadedData, setLoadedData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    // console.log('use effect is run')
    fetch(
      `https://${REACT_APP_IP_ADDRESS}:${REACT_APP_PORT}/invitation/getList`,
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
        // console.log(data.data.data)
        setLoadedData(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [authCtx.token, refresh]);

  const onAccept = (props) => async () => {
    // console.log(props.id)
    await fetch(
      `https://${REACT_APP_IP_ADDRESS}:${REACT_APP_PORT}/invitation/update?invitationId=${props.id}&state=1`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          token: authCtx.token,
        },
      }
    );
    console.log("accept finished!");
    setRefresh((pre) => !pre);
  };

  return (
    <Fragment>
      <ul className="beinv-list">
        {loadedData.map((data) => (
          <Fragment key={data.id}>
            <Instance
              id={data.id}
              userId = {data.userId}
              name={data.nickname}
              birthdate={data.birthdate}
              des={data.intro}
              img={data.album}
            />
            <button onClick={onAccept(data)}>接受邀约</button>
          </Fragment>
        ))}
      </ul>
    </Fragment>
  );
};

export default BeInvitedList;

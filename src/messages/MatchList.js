import { Fragment, useContext, useEffect, useState } from "react";
import Instance from "../candidates/Instance";
import AuthContext from "../store/auth-context";
import "./MatchList.css";

const { REACT_APP_IP_ADDRESS, REACT_APP_PORT } = process.env;

const MatchList = () => {
  const [loadedData, setLoadedData] = useState([]);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    // console.log('use effect is run')
    fetch(
      `https://${REACT_APP_IP_ADDRESS}:${REACT_APP_PORT}/invitation/getSuccessInvitationList`,
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
  }, [authCtx.token]);

  return (
    <Fragment>
      <ul className="mat-list">
        {loadedData.map((data) => (
          <Instance
            id={data.id}
            key={data.id}
            userId = {data.userId}
            name={data.nickname}
            birthdate={data.birthdate}
            // des={data.intro}
            img={data.album}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default MatchList;

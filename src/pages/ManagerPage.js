import { Fragment,useContext, useEffect, useState } from "react";
import AuthContext from '../store/auth-context';

const { REACT_APP_IP_ADDRESS, REACT_APP_PORT } = process.env;


const ManagerPage = () => {

  const authCtx = useContext(AuthContext);
  // console.log(authCtx.token);

  const [loadedData, setLoadedData] = useState([]);
  useEffect(() => {
    
    // console.log('use effect is run')
    fetch(`https://${REACT_APP_IP_ADDRESS}:${REACT_APP_PORT}/invitation/manager/getList`, {   
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": authCtx.token
      },
    })//promise
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
        console.log(res.data)
        // console.log(data.data.data)
        setLoadedData(res.data)
      })
      .catch((err) => {
        alert(err.message);
      });

  }, [authCtx.token])

  let filteredData = [];

  if(loadedData){
    filteredData = loadedData.filter(
        (ins) => +ins.state === +1
      );
  }

  
  return <Fragment>
    <ul className="candidate-list">
      {filteredData.map((data) => (
            // <Instance
            //   id={data.id}
            //   key={data.intro}
            //   name={data.nickname}
            //   birthdate={data.birthdate}
            //   des={data.intro}
            //   img={data.album}
            // />
            <div key = {data.id}> 邀请者{data.sender}号与接受者{data.receiver}号已匹配</div>
          ))
        }
    </ul>
    
  </Fragment>
};

export default ManagerPage;
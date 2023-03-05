import "./CandidatesList.css";
import Instance from "./Instance.js";
import { Fragment,useContext, useEffect, useState } from "react";
import AuthContext from '../store/auth-context';

const { REACT_APP_IP_ADDRESS, REACT_APP_PORT } = process.env;


const CandidatesList = (props) => {
  let filteredCandidates;
  
  const authCtx = useContext(AuthContext);
  // console.log(authCtx.token);

  const [loadedData, setLoadedData] = useState([]);
  useEffect(() => {
    
    // console.log('use effect is run')
    fetch(`https://${REACT_APP_IP_ADDRESS}:${REACT_APP_PORT}/user/list`, {   
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

  // if (props.age) {
  //   filteredCandidates = loadedData.filter(
  //     (ins) => +ins.age === +props.age
  //   );
  // }

  // console.log(loadedData);

  return (
    <Fragment>
    <ul className="candidate-list">
      {loadedData.map((data) => (
            <Instance
              userId={data.id}
              key={data.id}
              name={data.nickname}
              birthdate={data.birthdate}
              des={data.intro}
              img={data.album}
            />
          ))
        }
    </ul>
    </Fragment>
  );

  // return (
  //   <ul className="candidate-list">
  //     {!props.age
  //       ? props.candidates.map((candidate) => (
  //           <Instance
  //             id={candidate.id}
  //             key={candidate.id}
  //             name={candidate.name}
  //             age={candidate.age}
  //             des={candidate.description}
  //             img={candidate.img}
  //           />
  //         ))
  //       : filteredCandidates.map((candidate) => (
  //           <Instance
  //             id={candidate.id}
  //             key={candidate.id}
  //             name={candidate.name}
  //             age={candidate.age}
  //             des={candidate.description}
  //             img={candidate.img}
  //           />
  //         ))}
  //   </ul>
  // );
};

export default CandidatesList;

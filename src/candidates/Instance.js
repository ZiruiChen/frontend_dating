import "./Instance.css";
import Card from "../components/UI/Card";
import { Link } from "react-router-dom";

const Instance = (props) => {
  let url = props.img;
  const dat = new Date(props.birthdate);
  const ageDifMs = Date.now() - dat;
  const ageDate = new Date(ageDifMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  return (
    <li>
      <Card className="lady-instance">
        <div className="lady-instance__description">
          <Link className="lady-instance__img" to={"/candidates/" + props.userId}>
            <img className="lady-instance__img" src={props.img} alt="" />
          </Link>
          {/* <img className="lady-instance__img" src={url} alt="" /> */}
          <h2>{props.name}</h2>
          <div className="lady-instance__age">年龄: {age}</div>
          {props.id && <div className="lady-instance__age">用户id: {props.id}</div>}
          {props.des && <div className="lady-instance__age">{props.des}</div>}
          
        </div>
      </Card>
    </li>
  );
};

export default Instance;

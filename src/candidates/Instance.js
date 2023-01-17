import "./Instance.css";
import Card from "../components/UI/Card";
import { Link } from "react-router-dom";

const Instance = (props) => {
  let url = props.img;
  return (
    <li>
      <Card className="lady-instance">
        <div className="lady-instance__description">
          <Link to={"/candidates/" + props.id}>
            <img className="lady-instance__img" src={url} alt="" />
          </Link>
          {/* <img className="lady-instance__img" src={url} alt="" /> */}
          <h2>{props.name}</h2>
          <div className="lady-instance__age">年龄: {props.age}</div>
          <div className="lady-instance__age">{props.des}</div>
        </div>
      </Card>
    </li>
  );
};

export default Instance;

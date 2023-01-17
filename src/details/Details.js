import { Fragment } from "react";
import Card from "../components/UI/Card";
import "./Details.css";

const Details = (props) => {
  const urlList = [
    "https://img0.baidu.com/it/u=2138718058,2596450093&fm=253&fmt=auto&app=138&f=JPEG?w=544&h=500",
    "https://img0.baidu.com/it/u=3052830724,3096852184&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500",
  ];

  const imgs = urlList.map((url,index) => {
    return <img key={index} className="details-instance__img" src={url} alt="" />;
  });

  //fetch details by id
  return (
    <Fragment>
      <header className="details-header">{props.id}</header>
      <Card className="details-instance">
        <div className="details-instance__description">
          {imgs}

          <div className="details-instance__age">年龄: {props.id}</div>
          <div className="details-instance__age">{props.id}</div>
        </div>
      </Card>
    </Fragment>
  );
};

export default Details;

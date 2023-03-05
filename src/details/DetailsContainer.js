import "./DetailsContainer.css";
import { useState } from "react";
import Details from "./Details";
import NotifyModal from "../components/UI/NotifyModal";

const DetailsContainer = (props) => {
  const [noti, setNoti] = useState();

  const notiHandler = () => {
    setNoti(null);
  };

  const onInvite = () => {
    console.log('this is on update in detail container')
    setNoti({
    title: '秀才娘',
    message: '已邀约',
  });
  };

  return (
    <div className="details-container">
      { noti &&     
        <NotifyModal
          title={noti.title}
          message={noti.message}
          onConfirm={notiHandler}
        />
      }
      <Details id={props.id} onInvited={onInvite}/>
    </div>
  );
};

export default DetailsContainer;

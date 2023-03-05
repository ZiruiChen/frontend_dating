import "./ProfileContainer.css";
import Card from "../components/UI/Card";
import ProfileForm from "./ProfileForm";
import { useState } from "react";

import NotifyModal from "../components/UI/NotifyModal";


const ProfileContainer = (props) => {
  const [noti, setNoti] = useState();

  

  const notiHandler = () => {
    setNoti(null);
  };

  const onUpdate = () => {
    console.log('this is on update in profile container')
    setNoti({
    title: '秀才娘',
    message: '更新成功',
  });
  };

  return (
    <Card className="container">
      { noti &&     
        <NotifyModal
          title={noti.title}
          message={noti.message}
          onConfirm={notiHandler}
        />
      }
      <h1>个人资料</h1>
      <ProfileForm onUpdate= {onUpdate}></ProfileForm>
    </Card>
  );
};

export default ProfileContainer;

import "./ProfileContainer.css";
import Card from "../components/UI/Card";
import ProfileForm from "./ProfileForm";

const ProfileContainer = (props) => {
  return (
    <Card className="container">
      <h1>个人资料</h1>
      <ProfileForm></ProfileForm>
    </Card>
  );
};

export default ProfileContainer;

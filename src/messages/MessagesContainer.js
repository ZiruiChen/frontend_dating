import "./MessagesContainer.css";
import BeInvitedList from "./BeInvitedList";
import { useState } from "react";
import MyInvitationList from "./MyInvitationList";
import MatchList from "./MatchList";

const MessagesContainer = () => {
  const [showMyInvitation, setShowMyInvitation] = useState(-2);

  const onMyInvitation = () => {
    setShowMyInvitation(-1);
  };
  const onInivtingMe = () => {
    setShowMyInvitation(0);
  };
  const onMatch = () => {
    setShowMyInvitation(1);
  };

  return (
    <div className="message-container">
      <div className="buttons">
        <span>
          <button onClick={onMyInvitation}>我的邀约</button>
        </span>
        <span>
          <button onClick={onInivtingMe}>邀约我的</button>
        </span>
        <span>
          <button onClick={onMatch}>匹配</button>
        </span>
      </div>
      {showMyInvitation === 0 && <BeInvitedList />}
      {showMyInvitation === -1 && <MyInvitationList />}
      {showMyInvitation === 1 && <MatchList />}
    </div>
  );
};

export default MessagesContainer;

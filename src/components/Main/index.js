import React from "react";
import "./Main.css";
import Empty from '../Empty';
import ChatWindow from '../../containers/ChatWindow';

const Main = ({user, activeUserId}) => {
  const renderMain = () => {
    if(!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId}/>
    } else {
      return <ChatWindow activeUserId={activeUserId}/>
    }
  }
  return <main className="Main">{renderMain()}</main>;
};

export default Main;
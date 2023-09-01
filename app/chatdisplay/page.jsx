import React from "react";
import ChatHeader from "./chatHeader/page";
import ChatContainer from "./chatContainer/page";
import MessageBar from "./messageBar/page";

const ChatDisplay = ({ selectedData,  onItemClick, mobileclass }) => {
  return (
    <div className={`border-conversation-border b-1 max-w-full bg-conversation-border flex flex-col h-[100vh] z-10 ${ mobileclass } `}>
        <ChatHeader
          name={selectedData.name}
          Presence={selectedData.Presence}
          avatar={selectedData.avatar}
          onItemClick={onItemClick}
        />
      <ChatContainer />
      <MessageBar />
    </div>
  );
}
export default ChatDisplay;

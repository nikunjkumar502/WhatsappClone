import React from "react";
import ChatHeader from "./chatHearder/page";
import ChatContainer from "./chatContainer/page";
import MessageBar from "./messageBar/page";

export default function Chatdisplay(props) {
  return (
    <div className="border-conversation-border b-1 w-full bg-conversation-border flex flex-col h-[100vh] z-10">
      <ChatHeader data={props.data} />
      <ChatContainer />
      <MessageBar />
    </div>
  );
}

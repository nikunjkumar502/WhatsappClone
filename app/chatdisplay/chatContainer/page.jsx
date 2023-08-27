import React, { useState } from "react";
import { messagesData } from "../../../data";
import Message from "../message/page";

export default function ChatContainer() {
  const [messages, setMessages] = useState(messagesData);
  

  return (
    <div className="w-full h-[80vh] relative bg-chat-background overflow-auto flex-1 p-4">
      <div className="w-full flex flex-col justify-between gap-1 overflow-auto mb-[2px]">
      
        {messages.map((msg, index) => (
          
          <Message
            key={index}
            msg={msg.msg}
            time={msg.time}
            isLink={msg.isLink}
            img={msg.img}
            sent={msg.sent}
          />
         
        ))}
      </div>
    </div>
  );
}

import React from "react";
import ChatListHeader from "./chatListHeader/page";
import SearchBar from "./searchbar/page";
import List from "./list/page";


export default function Chatlist(props) {
  return (
    <div className="bg-panel-header-background flex flex-col max-h-screen z-20 h-full min-w-fit relative border-x">
      <ChatListHeader />
      <SearchBar />
      <List data={props.data} />
    </div>
  );
}

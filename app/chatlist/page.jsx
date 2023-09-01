import React from "react";
import ChatListHeader from "./chatListHeader/page";
import SearchBar from "./searchbar/page";
import List from "./list/page";


 const Chatlist = ({ data, selectedItem, onItemClick , mobileclass}) => {
  return (
    <div className= {`bg-panel-header-background flex flex-col max-h-screen z-20 h-full min-w-fit relative border-x ${mobileclass}`}>
      <ChatListHeader />
      <SearchBar />
      <List data={data} selectedItem={selectedItem} onItemClick={onItemClick} />
    </div>
  );
}

export default Chatlist;
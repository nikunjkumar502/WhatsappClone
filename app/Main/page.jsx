"use client"
import React, { useState } from "react";
import Chatlist from "../chatlist/page";
import Chatdisplay from "../chatdisplay/page";
import { userData } from "../../data.js"; // Make sure the import path is correct
import "./styles.css";
import Empty from "../empty/page";

 const Main = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  const handleBackClick = (item) => {
    setSelectedItem(null);
    setSelectedData(item);
  };

  const handleItemClick = (itemId) => {
    if (selectedItem === itemId) {
      setSelectedItem(null);
      setSelectedData(null);
    } else {
      setSelectedItem(itemId);
      setSelectedData(userData.find((item) => item.id === itemId));
    }
  };

  return (
    <div className="grid grid-cols-main h-screen w-screen overflow-hidden font-sans">
      <Chatlist
      mobileclass = {selectedItem ? "hide-display" : "show-display"} 
        data={userData}
        selectedItem={selectedItem}
        onItemClick={handleItemClick}
        
      />
      {selectedData ? <Chatdisplay
      mobileclass = {selectedItem ?  "show-display" : "hide-display" } 
        selectedData={selectedData}
        onItemClick={handleBackClick}
      /> :
      <Empty />}
    </div>
  );
}

export default Main;

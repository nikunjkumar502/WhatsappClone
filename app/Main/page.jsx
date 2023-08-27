"use client"
import React, { useState, useEffect } from 'react'; // Added 'useEffect' import
import Chatlist from '../chatlist/page';
import Chatdisplay from '../chatdisplay/page';
import { userData } from "../../data.js";


export default function Main() {

  return (
    <>
      <div className='grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden font-sans'>
        <Chatlist data={userData}/>
        <Chatdisplay data={userData}/>
      </div>
    </>
  )
}

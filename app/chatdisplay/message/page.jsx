import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import "./styles.modules.css";

const MessageTail = ({svgType}) => {
  return (
    <span>
      <svg
        className ={svgType}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8 13"
        width="8"
        height="13"
      >
        <path
          opacity=".13"
          d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
        ></path>
        <path
          fill="currentColor"
          d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
        ></path>
      </svg>
    </span>
  )
}

function Message({ msg, time, img, sent }) {

  return (
    <div
      className={`flex items-start ${sent ? "justify-end" : "justify-start"}`}
    >
      {img ? (
        <div className="relative max-w-[270px]">
          <img src={img} alt="img_message" className="rounded-md w-full" />
          <span className="absolute right-1 bottom-1 text-[#ffffff99] text-xs">
            {time}{" "}
            {sent ? (
              <DoneAllIcon sx={{ color: "#53bdeb", width: 24, height: 14 }} />
            ) : (
              " "
            )}
          </span>
        </div>
      ) : (
        <div className="max-w-[410px] flex" style={{ wordBreak: "break-word" }}>
            {!sent ? <MessageTail svgType="incoming-svg" /> : null }
            <div className="bg-[#202d33] relative flex rounded-md md:pb-[8px] md:pr-[7px] md:pt-[6px] md:pl-[9px] text-[#e9edef] text-sm flex-wrap whitespace-break-spaces font-sans mb-2 rounded-t-none">
              <div className="flex w-fit">{msg}</div>
              <span className=" text-[#8796a1] w-full right-0 relative mt-[-10px] mr-[0px] mb-[-5px] ml-[4px] font-light text-end text-xs">
                {time}
                {sent ? (
                  <DoneAllIcon
                    sx={{ color: "#53bdeb", width: 24, height: 14 }}
                  />
                ) : (
                  " "
                )}
              </span>
            </div>
            {sent ? <MessageTail svgType="outgoing-svg" /> : null }
        </div>
      )}
    </div>
  );
}

export default Message;
import {
  faCircle,
  faComment,
  faPaperPlane,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";

const Chat = () => {
  const closeChatRef = useRef(null);
  const chatRef = useRef(null);
  const miniChatRef = useRef(null);
  const chatTextRef = useRef(null);
  const mainRef = useRef(null);
  //     var closeChat=document.querySelector("#chat .close-chat")
  // var chat=document.getElementById("chat")
  // var miniChat=document.getElementById("mini-chat")
  // var chatText=document.getElementById("chat-text")
  // var main=document.querySelector("#chat main")

  const closeChat_onclick = (e) => {
    // console.log(e.target)
    chatRef.current.classList.add("active");
  };
  const miniChat_onclick = () => {
    chatRef.current.classList.remove("active");
  };
  const iconSendMessage = () => {
    if (chatTextRef.current.value.trim() != "") {
      if (
        chatTextRef.current.value[0].toUpperCase() ==
        chatTextRef.current.value[0]
      ) {
        AddChat("support");
      } else {
        AddChat("user");
      }
    }

    chatTextRef.current.value = "";
  };
  //keypress,keydown,keyup
  const keyUp = (a) => {
    if (a.keyCode == 13) {
      // debugger;
      if (chatTextRef.current.value.trim() != "") {
        if (
          chatTextRef.current.value[0].toUpperCase() ==
          chatTextRef.current.value[0]
        ) {
          AddChat("support");
        } else {
          AddChat("user");
        }
      }

      chatTextRef.current.value = "";
    }
  };

  var dt = new Date();

  function AddChat(clName) {
    mainRef.current.insertAdjacentHTML(
      "beforeend",
      `
        <div class="message ${clName}">
          <p>${chatTextRef.current.value}</p>
          <p class="time">${dt.getHours() + ":" + dt.getMinutes()}</p>
       </div>
      `
    );
    mainRef.current.scrollTop = mainRef.current.scrollHeight;
  }
  return (
    <>
      <div
        ref={miniChatRef}
        onClick={() => miniChat_onclick()}
        id="mini-chat"
        className="cursor-pointer w-[60px] h-[60px] bg-[#4ED38F] rounded-[50%] p-[15px] fixed bottom-[15px] right-[15%] z-[999] text-center"
      >
        <svg
          id="chat-icon-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
          className="fill-white"
        >
          <path
            d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div ref={chatRef} id="chat" className="active w-[350px] fixed bottom-[15px] right-[5%] md:right-[10%] z-[999]">
        <header className="p-[15px] bg-[#4ED38F] text-white">
          <div className="flex justify-between">
            <span>Let&#8217;s chat? - We're online</span>

            <div
              ref={closeChatRef}
              onClick={() => closeChat_onclick()}
              className="close-chat cursor-pointer"
            >
              <FontAwesomeIcon icon={faX} />
            </div>
          </div>
          <div className="p-4 text-center">
            <p>
              <FontAwesomeIcon icon={faUser} />
              Muradov Tahir{" "}
              <FontAwesomeIcon icon={faCircle} className="text-[#3cf796]" />
              <br />
              Operator
            </p>
          </div>
        </header>
        <main ref={mainRef}>
          <div className="p-[15px] mx-[20px] my-[10px] rounded-[10px] relative w-1/2 support">
            <p>Salam xoş gəldiz! Sizə necə kömək edə bilərəm?</p>
            <p className="absolute top-full text-black right-[15px] ">{dt.getHours() + ":" + dt.getMinutes()}</p>
          </div>
          {/* <div className="message user">
            <p>Salam xoş gördük!</p>
            <p className="time">15:40</p>
          </div> */}
        </main>
        <footer className="bg-white">
          <input
            onKeyDown={keyUp}
            className="form-control w-[80%]"
            ref={chatTextRef}
            id="chat-text"
            type="text"
            placeholder="write here..."
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            style={{ color: "#07974d" }}
            className="w-[20%] cursor-pointer"
            onClick={iconSendMessage}
          />
        </footer>
      </div>
    </>
  );
};

export default Chat;

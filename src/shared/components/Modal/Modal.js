import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const content = (
    <aside
      className={`${props.className} flex flex-col items-center bg-[#00000085] absolute z-50 top-0 left-0 w-full min-h-screen h-full  text-white `}
    >
      {props.children}
    </aside>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default Modal;

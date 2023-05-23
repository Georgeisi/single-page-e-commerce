import React from "react";
import modal1 from "../images/image-product-1-thumbnail.jpg";
import modal2 from "../images/image-product-2-thumbnail.jpg";
import modal3 from "../images/image-product-3-thumbnail.jpg";
import modal4 from "../images/image-product-4-thumbnail.jpg";
import { images } from "./Image";
import plus from "../images/icon-previous.svg";
import minus from "../images/icon-next.svg";
import { useState } from "react";
import x from "../images/icon-close.svg";
const Modal = ({ setModal }) => {
  const [index, setIdex] = useState(0);
  return (
    <div
      style={{
        zIndex: "4",
        width: "100vw",
        height: "100vh",
        top: "0",
        left: "0",
        opacity: "0.9",
      }}
      className="w-100 position-absolute bg-black py-5"
    >
      <div className="inner-carousel position-relative imageCarosel  mx-auto ">
        <img
          onClick={() => {
            setModal(false);
          }}
          className="position-absolute close2"
          src={x}
          alt=""
        />
        <img className="w-100 h-50" src={images[index].img} alt="" />
        <div className="plus1">
          <img
            onClick={() => {
              index > 0 && setIdex(index - 1);
            }}
            src={plus}
            alt=""
          />
        </div>
        <div className="minus1">
          <img
            onClick={() => {
              index < images.length - 1 && setIdex(index + 1);
            }}
            src={minus}
            alt=""
          />
        </div>
        <div className=" d-flex py-3 align-items-center ">
          <img
            onClick={() => {
              setIdex(0);
            }}
            className="w-25 px-2"
            src={modal1}
            alt=""
          />
          <img
            onClick={() => {
              setIdex(1);
            }}
            className="px-2 w-25"
            src={modal2}
            alt=""
          />
          <img
            onClick={() => {
              setIdex(2);
            }}
            className="px-2 w-25"
            src={modal3}
            alt=""
          />
          <img
            onClick={() => {
              setIdex(3);
            }}
            className="w-25 px-2"
            src={modal4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;

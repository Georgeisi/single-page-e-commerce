import React from "react";
import { images } from "./Image";
import { useState } from "react";
import plus from "../images/icon-previous.svg";
import minus from "../images/icon-next.svg";
import modal1 from "../images/image-product-1-thumbnail.jpg";
import modal2 from "../images/image-product-2-thumbnail.jpg";
import modal3 from "../images/image-product-3-thumbnail.jpg";
import modal4 from "../images/image-product-4-thumbnail.jpg";

const ImageCarousel = ({ setModal }) => {
  const [index, setIdex] = useState(0);

  return (
    <div
      style={{
        zIndex: "2",
      }}
      className="carousel  position-relative   "
    >
      <div className=" position-relative  ">
        <img
          onClick={() => {
            setModal(true);
          }}
          className="car"
          src={images[index].img}
          alt=""
        />
        <div className="plus">
          <img
            onClick={() => {
              index > 0 && setIdex(index - 1);
            }}
            src={plus}
            alt=""
          />
        </div>
        <div className="minus">
          <img
            onClick={() => {
              index < images.length - 1 && setIdex(index + 1);
              
            }}
            src={minus}
            alt=""
          />
        </div>
        <div className=" d-lg-flex py-3 item-4 ">
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

export default ImageCarousel;

import "../src/App.css";
import { useState } from "react";
import sneakers from "../src/images/logo.svg";
import cart from "../src/images/icon-cart.svg";
import profile from "../src/images/image-avatar.png";
import "bootstrap/dist/css/bootstrap.min.css";
import menu from "../src/images/icon-menu.svg";
import close from "../src/images/icon-close.svg";
import plus from "../src/images/icon-plus.svg";
import minus from "../src/images/icon-minus.svg";
import ImageCarousel from "./utils/ImageCarousel";
import Modal from "./utils/Modal";
import AddToCart from "./utils/AddToCart";
import modal1 from "./images/image-product-1-thumbnail.jpg";

function App() {
  const [active, setActive] = useState(false);
  let isactive = active === true ? "active" : "";
  const [modal, setModal] = useState(false);
  const [cartItem1, setCartItem1] = useState([]);

  const [useCart, setUseCart] = useState(false);
  const [count, setCount] = useState(1);
  

  return (
    <div className="App mw1440  mx-auto    ">
      <nav className="d-flex justify-content-between align-items-center gap-3 px-lg-5 border-bottom border-sm-0">
        <div className="d-lg-flex align-items-center">
          <img
            onClick={() => {
              setActive(!active);
            }}
            className={`close ${isactive}`}
            src={close}
            alt=""
          />
          <img
            onClick={() => {
              setActive(!active);
            }}
            className={`menu ${isactive} `}
            src={menu}
            alt=""
          />
          <img className="px-2 mt-lg-3" src={sneakers} alt="" />
          <div>
            <ul className={`${isactive}`}>
              <li>Collection</li>
              <li>Mens</li>
              <li>Womens</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="position-relative">
          <img
            onClick={() => {
              setUseCart(!useCart);
            }}
            className="px-2"
            src={cart}
            alt=""
          />
          <img width={"40px"} src={profile} alt="" />
        </div>
      </nav>
      <div className="py-sm-5  ">
        <div className="d-lg-flex gap-5 align-items-center w-100">
          {modal && <Modal setModal={setModal} />}
          <div className="ms-lg-5">
            <ImageCarousel modal={modal} setModal={setModal} />
          </div>
          <div className="mw1440 mx-auto">
            <p className="text-orange">SNEAKER COMPANY</p>
            <h2>Fall Limited Edition Sneakers</h2>
            <p>
              These low-profile sneakers are your perfect casual wear companion
              featuring a durable rubber outer sole they'll withstand everything
              the weather can offer
            </p>
            <div className="d-flex justify-content-between">
              <p>
                $125.00 <span className="bgorange text-orange">50%</span>
              </p>
              <p className="text-decoration-line-through">250.00</p>
            </div>
            <div className="dgrid gap-3">
              <div className="d-flex justify-content-between align-items-center bggray rounded-3 px-3">
                <img
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  src={plus}
                  alt=""
                />
                <p>{count}</p>
                <img
                  onClick={() => {
                    setCount(count - 1);
                  }}
                  src={minus}
                  alt=""
                />
              </div>
              <button
                onClick={() => {
                  setCount(count + 1);
                  const cartData = {
                    img1: modal1,
                    desc: "fall limited edition sneakers",
                    price: 125.0,
                    qty: count,
                  };
                  setCartItem1([cartData]);
                }}
                className="btn bgdarkorange mx-auto d-flex px-5 gap-3 w-100  text-center "
              >
                <img src={cart} alt="" />
                <p>Add to cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {useCart && (
        <div className="position-absolute cart1">
          <AddToCart cartItem={cartItem1} setCartItem={setCartItem1} setCount={setCount} />
        </div>
      )}
    </div>
  );
}

export default App;

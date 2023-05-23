import React from "react";
import del from '../images/icon-delete.svg'

const AddToCart = ({ cartItem,setCartItem,setCount }) => {
  console.log(cartItem);
  return (
    <div className="  px-5 bg-light rounded-3 py-0 checkout">
      <p className="border-bottom">Cart</p>
      <div className="">
        {cartItem.length < 1 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="d-lg-flex align-items-center gap-2 cartdetail">
            <img className="w-50" src={cartItem[0].img1} alt="" />
            <div className="position-relative">
              <p>{cartItem[0].desc}</p>
              <p>
                {cartItem[0].price} x{cartItem[0].qty}{" "}
                <span className="fw-bold">${cartItem[0].price * cartItem[0].qty}</span>
              </p>
              <img onClick={()=>{
                setCartItem([])
                setCount(0)
            }} style={{
                top: '25px',
                right: '10px',
              }} className="position-absolute" src={del} alt="" />
            </div>
          </div>
        )}
        <button className="btn bgdarkorange w-75 my-lg-3 mb-lg-5 ">
          checkout
        </button>
      </div>
    </div>
  );
};

export default AddToCart;

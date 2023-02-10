import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { removeProduct } from "../redux/cartRedux.js";
import { useDispatch } from "react-redux";
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser._id);
  // console.log(user);
  const navigate = useNavigate();
  console.log(cart);
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="cart_wrap">
        <h1>YOUR BAG</h1>
        <div className="cart_top">
          <button className="cart_t_btn">CONTINUE SHOPPING</button>
          <div className="c_t_texts">
            <span>Shopping Bag(2)</span>
            <span>Your Wishlist(0)</span>
          </div>
          <button className="cart_t_btn_2">CHECKOUT NOW </button>
        </div>
        <div className="cart_bottom">
          <div className="b_info">
            {cart.products.map((product) => (
              <div className="b_i_pro">
                <div className="i_pro_det">
                  <img src={product.img} alt="" />
                  <div className="p_det">
                    <span>
                      <b>Product:</b>
                      {product.title}
                    </span>
                    <span>
                      <b>ID:</b>
                      {product._id}
                    </span>
                    <div
                      className="p_n_color"
                      style={{ backgroundColor: product.color }}
                    ></div>
                    <span>
                      <b>Size:</b>
                      {product.size}
                    </span>
                  </div>
                </div>
                <div className="price_det">
                  <div className="p_a_con">
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        product.quantity += 1;
                      }}
                    >
                      <Add />
                    </div>
                    <div>{product.quantity}</div>
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        dispatch(removeProduct(product));
                      }}
                    >
                      <Remove />
                    </div>
                  </div>
                  <div className="p_price">Rs {product.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="b_sum">
            <h1 className="font-extralight m-0">ORDER SUMMARY</h1>
            <div>
              <span>Subtotal</span>
              <span>Rs{cart.total}</span>
            </div>
            <div>
              <span>Estimated Shipping</span>
              <span>Rs{cart.total / 10}</span>
            </div>
            <div>
              <span>Shipping Discount</span>
              <span>-Rs{cart.total / 10}</span>
            </div>
            <div className="font-medium" style={{ fontSize: "24px" }}>
              <span>Total</span>
              <span>Rs {cart.total}</span>
            </div>
            <button>Check Out</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;

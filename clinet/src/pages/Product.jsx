import { selectClasses } from "@mui/material";
import React, { useEffect } from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct, removeProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const handleClick = () => {
    //update cart
    dispatch(addProduct({ ...product, quantity, color, size }));
    // dispatch(removeProduct());
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="wrapper_con">
        <div className="img_con">
          <img src={product.img}></img>
        </div>
        <div className="info_con">
          <h1 className="info_title">{product.title}</h1>
          <div className="info_des">{product.desc}</div>
          <span>Rs {product.price}</span>
          <div className="p_f_con">
            <div className="p_f">
              <div className="f_t">Color</div>
              {product.color?.map((e) => (
                <div
                  className="p_f_cir"
                  key={e}
                  style={{ backgroundColor: e }}
                  onClick={() => setColor(e)}
                ></div>
              ))}
            </div>
            <div className="p_f">
              <div className="f_t">Size</div>
              <select
                className="f_size"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              >
                {product.size?.map((e) => (
                  <option key={e} v>
                    {e}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="add_con">
            <div className="amount_con">
              <div className="pb-0.5 cursor-pointer hover:bg-teal-200 rounded-full duration-200">
                <RemoveIcon
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                />
              </div>
              <div className="count_p">{quantity}</div>
              <div className="pb-0.5 cursor-pointer hover:bg-teal-200 rounded-full duration-200">
                <AddIcon
                  onClick={() => {
                    if (quantity < 9) {
                      setQuantity(quantity + 1);
                    }
                  }}
                />
              </div>
            </div>
            <btn className="cart_btn" onClick={handleClick}>
              ADD TO CART
            </btn>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;

import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="circle"></div>
      <img className="pro_img" src={item.img} alt="Product img" />
      <div className="prod_info">
        <div className="pro_icon ">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="pro_icon">
          <Link to={`/product/${item._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </div>
        <div className="pro_icon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;

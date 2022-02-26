import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="cate_item flex-1">
      <Link to={`/products/${item.cat}`}>
        <img className="cate_img" src={item.img} />
        <div className="cate_info">
          <h1 className="cate_title">{item.title}</h1>
          <button className="cate_btn">Shop Now</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;

import React from "react";
import { categories } from "../data/data1";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="container_cate">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;

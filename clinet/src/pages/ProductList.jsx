import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <h1 className="p_title">{cat}</h1>
      <div className="filter_con">
        <div className="filter">
          <div className="filter_text">Filter Products:</div>
          <select
            className="filter_select"
            name="color"
            onChange={handleFilters}
          >
            <option disabled selected>
              Color
            </option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </select>
          <select
            className="filter_select"
            name="size"
            onChange={handleFilters}
          >
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter">
          <div className="filter_text">Sort Products:</div>
          <select
            className="filter_select"
            onChange={(e) => setSort(e.target.value)}
          >
            <option selected value="newest">
              Newest
            </option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;

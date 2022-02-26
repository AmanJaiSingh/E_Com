import React, { useState } from "react";
import { useEffect } from "react";
import { popularProducts } from "../data/data1";
import Product from "./Product";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?Category=${cat}`
            : `http://localhost:5000/api/products`
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => console.log(a.createdAt - b.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="cont_product">
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </div>
  );
};

export default Products;

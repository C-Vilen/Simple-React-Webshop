import React, { useState, useEffect } from "react";
import "../../styles/styles.css";
import "../../styles/overviewProducts.css";
import Footer from "../../Components/Footer";
import ProdCardContainer from "../../Components/ProdCardContainer";
import { useParams } from "react-router-dom";

export default function OverviewProducts() {
  const [products, setProducts] = useState([]);
  //   const category = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  //category call dependent on params
  //   useEffect(() => {
  //     fetch(`http://localhost:3000/categories/${category}`)
  //       .then((response) => response.json())
  //       .then((data) => setProducts(data));
  //   }, []);
  return (
    <>
      <ProdCardContainer heading="All Products" products={products} />
      <Footer />
    </>
  );
}

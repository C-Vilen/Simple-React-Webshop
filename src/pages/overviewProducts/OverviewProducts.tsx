import { useState, useEffect, Fragment } from "react";
import "../../styles/styles.css";
import "../../styles/overviewProducts.css";
import Footer from "../../components/Footer";
import ProdCardContainer from "../../components/ProdCardContainer";

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
    <Fragment>
      <ProdCardContainer heading="All Products" products={products} />
      <Footer />
    </Fragment>
  );
}

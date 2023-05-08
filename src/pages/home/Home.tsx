import { Fragment, useContext, useEffect, useState } from "react";

// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

// Components
import AboutSection from "../../components/AboutSection";
import CatCardContainer from "../../components/CatCardContainer";
import Footer from "../../components/StandardComponents/Footer";
import CardCarrousel from "../../components/CardCarrousel";
import Header from "../../components/Header";
import { CustomerContext } from "../../App";

export default function Home() {
  const customer = useContext(CustomerContext);
  useEffect(() => {
    console.log(customer);
  });

  const[products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products/carrousel")
    .then((response) => response.json())
    .then((data) => setProducts(data));
  })

  return (
    <Fragment>
      <Header />            
      <CatCardContainer
        catName="" />
      <CardCarrousel products={products} heading={"Newly added Duckies"} />
      <AboutSection />
      <Footer />
    </Fragment>
  );
}

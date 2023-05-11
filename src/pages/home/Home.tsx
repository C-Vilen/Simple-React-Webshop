import { Fragment, useContext, useEffect, useState } from "react";

// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

// Components
import AboutSection from "../../components/AboutSection";
import Footer from "../../components/StandardComponents/Footer";
import CardCarrousel from "../../components/CardCarrousel";
import Header from "../../components/Header";
import CatCardContainer from "../../components/OverviewCategoryComponent/CatCardContainer";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products/carrousel")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Fragment>
      <main className="content">
        <Header />
        <CatCardContainer heading="All Categories" />
        <CardCarrousel products={products} heading={"Newly added Duckies"} />
        <AboutSection />
        <Footer />
      </main>
    </Fragment>
  );
}
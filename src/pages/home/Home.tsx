import { Fragment, useContext, useEffect } from "react";

// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

// Components
import AboutSection from "../../components/AboutSection";
import Footer from "../../components/StandardComponents/Footer";
import CardCarrousel from '../../components/CardCarrousel';
import Header from '../../components/Header';
import { CustomerContext } from "../../App";
import CatCardContainer from "../../components/OverviewCategoryComponent/CatCardContainer";


export default function Home() {
  const customer = useContext(CustomerContext);
  useEffect(() => {
    console.log(customer);
  });
  return (
    <Fragment>
      <main className="content">
        <Header />
        <CatCardContainer heading="All Categories" />
        <CardCarrousel items={[
          { prodImg: "assets/images/profProductsImage.png", prodName: "A", prodPrice: "100" },
          { prodImg: "assets/images/profProductsImage.png", prodName: "B", prodPrice: "10" },
          { prodImg: "assets/images/profProductsImage.png", prodName: "C", prodPrice: "1" }
        ]} />
        <AboutSection />
        <Footer />
      </main>
    </Fragment>
  );
}
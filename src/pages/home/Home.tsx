import { Fragment, useContext, useEffect } from "react";

// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

// Components
import AboutSection from "../../components/AboutSection";
import CatCardContainer from "../../components/CatCardContainer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CustomerContext } from "../../App";

export default function Home() {
  const customer = useContext(CustomerContext);
  useEffect(() => {
    console.log(customer);
  });
  return (
    <Fragment>
      <Header />
      <CatCardContainer />
      <AboutSection />
      <Footer />
    </Fragment>
  );
}

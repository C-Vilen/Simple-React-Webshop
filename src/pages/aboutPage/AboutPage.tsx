import { Fragment, useContext, useEffect } from "react";

// CSS import
import '../../styles/styles.css';

// Components
import Footer from "../../components/Footer";
import AboutPageSection from "../../components/AboutPageSection";

export default function AboutDuck() {
	return (
	  <Fragment>
		<AboutPageSection />
		<Footer />
	  </Fragment>
	);
  }

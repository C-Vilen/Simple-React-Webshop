import { Fragment } from 'react';

// CSS import
import '../../styles/index.css';
import '../../styles/styles.css';

// Components
import AboutSection from "../../components/AboutSection";
import CatCardContainer from "../../components/CatCardContainer";
import Footer from "../../components/Footer";
import Header from '../../components/Header';

export default function Home() {
    return (
        <Fragment>
            <Header />
            <CatCardContainer />
            <AboutSection />
            <Footer />
        </Fragment>
    );
}
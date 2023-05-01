import { Fragment } from 'react';

// CSS import
import '../../styles/index.css';
import '../../styles/styles.css';

// Components
import AboutSection from "../../components/AboutSection";
import CatCardContainer from "../../components/CatCardContainer";
import Footer from "../../components/Footer";
import CardCarrousel from '../../components/CardCarrousel';
import Header from '../../components/Header';

export default function Home() {
    return (
        <Fragment>
            <Header />
            <CatCardContainer 
            catName = "" />
            <CardCarrousel items={[""]} ProdCardWidth={0} ProdCardHeight={0} gap={0} />
            <AboutSection />
            <Footer />
        </Fragment>
    );
}
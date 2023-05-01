import { Fragment } from 'react';

// CSS import
import '../../styles/index.css';
import '../../styles/styles.css';

// Components
import AboutSection from "../../components/AboutSection";
import CatCardContainer from "../../components/CatCardContainer";
import Footer from "../../components/Footer";
import CardCarrousel from '../../components/CardCarrousel';
import Header from '../../components/header'


export default function Home() {
    return (
        <Fragment>
            <Header />
            <CatCardContainer 
            catName = "" />
            <CardCarrousel items={[
                {prodImg:"assets/images/products/profProductsImage.png", prodName:"A", prodPrice:"100"},
                {prodImg:"assets/images/products/profProductsImage.png", prodName:"B", prodPrice:"10"},
                {prodImg:"assets/images/products/profProductsImage.png", prodName:"C", prodPrice:"1"}
                ]}  />
            <AboutSection />
            <Footer />
        </Fragment>
    );
}
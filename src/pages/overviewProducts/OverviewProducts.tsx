import { Fragment } from 'react';

// CSS import
import '../../styles/styles.css';
import '../../styles/overviewProducts.css';

// Components
import Footer from "../../components/Footer";
import ProdCardContainer from '../../components/ProdCardContainer';

export default function OverviewProducts(){
    return (
        <Fragment>
            <ProdCardContainer 
            heading= "All Products"
            />
            <Footer />
        </Fragment>
    );
}
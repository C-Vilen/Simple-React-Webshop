import { Fragment } from 'react';

//CSS 
import '../../styles/styles.css';

// Components
import Footer from "../../components/Footer";
import OneProductSection from '../../components/OneProductComponent/OneProductSection';


export default function OneProduct() {
    return (
        <Fragment>
            <main className="page-main">
                <OneProductSection prodImg={'assets/images/products/duck1.png'} prodName={"Viking"} prodPrice={"49"} prodDescription={"A duck ready for battle! Yes, that's how it can go when a rubber duck dresses up as a Viking. Play along! It can be a tough fight when all the enemies attack. \n \n This Viking rubber duck, measures 8.5 x 7.5 x 8.5 cm is made of plastic and sold individually."}            // heading= "All Products"
                />
            </main>
            <Footer />
        </Fragment>
    );
}

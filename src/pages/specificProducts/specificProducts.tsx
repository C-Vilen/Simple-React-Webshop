import { useState, useEffect, Fragment } from "react";
import "../../styles/styles.css";
import Footer from "../../components/StandardComponents/Footer";
import ProdCardContainer from "../../components/ProdCardContainer";
import { useLocation } from "react-router-dom";

export default function SpecificProducts() {
    const [specificProducts, setSpecificProducts] = useState([]);
    const { state } = useLocation();
    const ocId = state.ocId;
    const subcId = state.subcId;
    const subCatName = state.subCatName;

    useEffect(() => {
        fetch(`http://localhost:3000/categories/overcategories/${ocId}/${subcId}`)
            .then((response) => response.json())
            .then((data) => setSpecificProducts(data));
    }, []);

    return (
        <Fragment>
            <main className="content">
                <ProdCardContainer heading={subCatName + " products"} products={specificProducts} />
                <Footer />
            </main>
        </Fragment>
    );
}

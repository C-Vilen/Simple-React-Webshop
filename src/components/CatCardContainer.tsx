// Components
import { Fragment } from 'react';
import CatCard from './CatCard';

interface CatCardContainerProps {
    catName: String;
}

export default function CatCardContainer({ catName }: CatCardContainerProps) {
    if (catName == "") {
        catName = "Categories";
    }
    return (
        <Fragment>
            <section className="py-5">
                <h2 className="category-heading text-center">{catName}</h2>
                <div className="container px-4 px-lg-5">
                    <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <CatCard
                            catImg="assets/images/products/profProductsImage.png"
                            catName="Proffession"
                            priceRange="40 - 80 DKK"
                        />
                        <CatCard
                            catImg="assets/images/products/profProductsImage.png"
                            catName="Test2"
                            priceRange="40 - 80 DKK"
                        />
                        <CatCard
                            catImg="assets/images/products/profProductsImage.png"
                            catName="Test3"
                            priceRange="40 - 80 DKK"
                        />
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
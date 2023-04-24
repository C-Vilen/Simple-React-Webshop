// Components
import CatCard from "./CatCard";

export default function CatCardContainer() {
    return (
        <>
            <section className="py-5">
                <h2 className="category-heading text-center">Categories</h2>
                <div className="container px-4 px-lg-5">
                    <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <CatCard 
                            catImg = "assets/images/products/profProductsImage.png"
                            catName = "Proffession"
                            priceRange = "40 - 80 DKK"
                        />
                        <CatCard 
                            catImg = "assets/images/products/profProductsImage.png"
                            catName = "Test2"
                            priceRange = "40 - 80 DKK"
                        />
                        <CatCard 
                            catImg = "assets/images/products/profProductsImage.png"
                            catName = "Test3"
                            priceRange = "40 - 80 DKK"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
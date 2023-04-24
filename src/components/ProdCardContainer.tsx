import ProdCard from "./ProdCard";

interface ProdCardContainerProps {
  heading: String;
  products: never[];
}

export default function ProdCardContainer({
  heading,
  products,
}: ProdCardContainerProps) {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <h2 className="category-heading">{heading}</h2>
          <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {products.map((product: any) => (
              <div className="col" id={product.id}>
                <ProdCard
                  prodImg={"./assets/images/" + product.imgSrc}
                  prodName={product.productName}
                  prodPrice={product.productPrice + " DKK"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

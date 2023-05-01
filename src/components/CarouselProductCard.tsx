import { Fragment } from "react";

export interface CarouselProductCardProps {
    prodImg:string;
    prodName:string;
    prodPrice:string;
}

export function CarouselProductCard({prodImg, prodName, prodPrice}:CarouselProductCardProps) {
    return (
        <Fragment>
            <div className="card w-100 d-flex flex-column justify-content-center align-items-center" 
            //because lolz
            style={{backgroundImage: "linear-gradient(#fff,#F2BD2C, #fff)"}}>
                <img className="product-img" src={prodImg} alt="..." />
                <div className="card-body">
                    <div className="text-center">
                        <h5 className="fw-bolder" id="productName">{prodName}</h5>
                        <span><span id="productPrice">{prodPrice}</span> DKK</span>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn BlackButton" href="../productPage/product.html">See product</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
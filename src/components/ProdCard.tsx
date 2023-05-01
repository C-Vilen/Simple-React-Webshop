import { Fragment } from "react";
import { Link } from "react-router-dom";

interface ProdCardProps {
    prodImg:string;
    prodName:string;
    prodPrice:string;
}

export default function ProdCard({prodImg, prodName, prodPrice}:ProdCardProps) {
    return (
        <Fragment>
            <div className="card">
                <img className="product-img" src={prodImg} alt="..." />
                <div className="card-body">
                    <div className="text-center">
                        <h5 className="fw-bolder" id="productName">{prodName}</h5>
                        <span><span id="productPrice">{prodPrice}</span> DKK</span>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><Link className="btn BlackButton" to="/Product">See product</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
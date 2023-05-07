import { Fragment } from "react";
import { Link } from "react-router-dom";

interface CatCardProps {
    catName: string;
    ocId: string;
    priceRange: string;
    catImg: string;
}

export default function CatCard({ catName, ocId, catImg, priceRange }: CatCardProps) {
    // Removes the space from the overCategory name:
    const formattedCatName = catName.replace(/ /g, '-');

    return (
        <Fragment>
            <div className="col" id={ocId}>
                <div className="card">
                    {/* Product image */}
                    <img className="product-img" src={catImg} alt="..." />
                    {/* Product details */}
                    <div className="card-body">
                        <div className="text-center">
                            {/* Product name */}
                            <h5 className="fw-bolder">{catName}</h5>
                            {/* Product price */}
                            {priceRange}
                        </div>
                    </div>
                    {/* Product actions */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <Link className="BlackButton btn mt-auto" to={`/${formattedCatName}`}>
                                See category
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
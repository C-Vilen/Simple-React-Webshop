export default function CatCard(props: any) {
    return (
        <>
            <div className="col">
                <div className="card">
                    {/* Product image */}
                    <img className="product-img" src={props.catImg} alt="..." />
                    {/* Product details */}
                    <div className="card-body">
                        <div className="text-center">
                            {/* Product name */}
                            <h5 className="fw-bolder">{props.catName}</h5>
                            {/* Product price */}
                            {props.priceRange}
                        </div>
                    </div>
                    {/* Product actions */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="BlackButton btn mt-auto" href="./pages/productOverviewPage/erhvervOverview.html">See category</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import { Fragment, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CustomerContext } from "../../App";
import "./OneProductSection.css";

interface OneProductSectionProps {
  prodImg: string;
  prodName: string;
  prodPrice: string;
  prodDescription: string;
}

export default function OneProductSection({
  prodImg,
  prodName,
  prodPrice,
  prodDescription,
}: OneProductSectionProps) {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("customer context is undefined");
  }
  const { customer, updateCustomer } = context;
  const { prodId: routeProdId } = useParams();

  async function buyProduct() {
    const response = await fetch(
      `http://localhost:3000/baskets/${customer.customerId}/${routeProdId}`,
      {
        mode: "cors",
        method: "PUT",
      }
    );
  }

  return (
    <Fragment>
      <div className="container px-4 px-lg-5">
        <nav>
          <ol className="breadcrumbs">
            <li className="breadcrumb-item">
              <Link to="/All-products">All products</Link>
            </li>
            <li className="active breadcrumb-item">
              <a id="breadcrumb-update" href="#">
                {prodName}
              </a>
            </li>
          </ol>
        </nav>
        <div className="row">
          {/* Product picture */}
          <div className="col-xs-12 col-md-7">
            <div>
              <img
                className="product-img product-image"
                id="product-Img"
                src={"../assets/images/" + prodImg}
                alt="..."
              />
            </div>
          </div>

          {/* Text box with description, prices and buy button */}
          <div className="col-xs-12 col-md-5 second-box">
            <div className="row">
              <div className="col col-12">
                <h1 id="productName">{prodName}</h1>
                <p id="productDescrption">{prodDescription}</p>
                <h3>
                  {" "}
                  <span>
                    {" "}
                    <span id="productPrice">{prodPrice}</span> DKK
                  </span>
                </h3>
              </div>
              <div className="col col-12 align-self-end">
                <button
                  id="AddProduct"
                  className="BlackButton btn mt-auto"
                  type="submit"
                  onClick={buyProduct}>
                  <i className="bi-cart-fill me-1"></i> Buy duck
                  <span className="badge bg-dark text-white ms-1 rounded-pill"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Horizontal line breaker */}
      <div className="col-12 px-4 px-lg-5">
        <br></br>
        <hr></hr>
      </div>
    </Fragment>
  );
}

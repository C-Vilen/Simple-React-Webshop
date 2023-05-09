import { Fragment, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CustomerContext } from "../App";

interface ProdCardProps {
  prodImg: string;
  prodName: string;
  prodPrice: string;
  prodId: string;

}

export default function ProdCard({
  prodImg,
  prodName,
  prodPrice,
  prodId,
}: ProdCardProps) {
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
    async function getBasketCount() {
      const response = await fetch(
        `http://localhost:3000/baskets/${customer.customerId}`,
        {
          mode: "cors",
          method: "GET",
        }
      );
      const data = await response.json();
      
      //This method maybe needs to be implemented
      //updateProductCount(data.length);
    }
    getBasketCount();
  }

  return (
    <Fragment>
      <div className="card" id={prodId}>
        <img className="product-img" src={prodImg} alt="..." />
        <div className="card-body">
          <div className="text-center">
            <h5 className="fw-bolder" id="productName">
              {prodName}
            </h5>
            <span>
              <span id="productPrice">{prodPrice}</span> DKK
            </span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <Link className="btn BlackButton" to={`/Product/${prodId}`}>
              See product
            </Link>
          </div>
        
        <div className="text-center">
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
    </Fragment>
  );
}

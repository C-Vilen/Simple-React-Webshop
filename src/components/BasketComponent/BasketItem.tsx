import { Fragment, useContext, useState } from "react";
import { CustomerContext } from "../../App";

// CSS
import "./Basket.css";

interface BasketItemProps {
  prodName: String;
  prodAmount: number;
  prodPrice: number;
  prodImg: string;
  prodId: number;
}

export default function BasketItem({
  prodName,
  prodAmount,
  prodPrice,
  prodImg,
  prodId,
}: BasketItemProps) {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("customer context is undefined");
  }
  const { customer } = context;
  const [itemCount, setItemCount] = useState(prodAmount);
  async function buyProduct() {
    await fetch(
      `http://localhost:3000/baskets/${customer.customerId}/${prodId}`,
      {
        mode: "cors",
        method: "PUT",
      }
    );
    setItemCount(itemCount + 1);
  }
  return (
    <Fragment>
      <li className="list-group-item d-flex justify-content-between cart-title-header">
        <div className="container text-center">
          <div className="row justify-content-between">
            <div className="col-md-6 col-lg-6">
              <strong>{prodName}</strong>
              <img src={prodImg} className="product-img-basket" />
            </div>
            <div className="col-md-6 col-lg-6 align-self-center">
              <div className="container text-center">
                <div className="row justify-content-between align-items-center">
                  <button type="button" className="btn-danger btn col-2">
                    -
                  </button>
                  <strong className="quantity col-3">{itemCount}</strong>
                  <button
                    type="button"
                    className="btn-danger btn col-2"
                    onClick={buyProduct}>
                    +
                  </button>
                  <strong
                    className="col-3"
                    style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                    {" "}
                    {prodPrice * itemCount} DKK
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </Fragment>
  );
}

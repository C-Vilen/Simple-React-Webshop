import { Fragment, useContext, useEffect, useState } from "react";
import { CustomerContext } from "../../App";

// CSS
import "./Basket.css";

interface BasketItemProps {
  prodName: String;
  prodAmount: number;
  prodPrice: number;
  prodImg: string;
  prodId: number;
  buyProduct: (prodId: number) => void;
  removeProduct: (prodId: number) => void;
}

export default function BasketItem({
  prodName,
  prodAmount,
  prodPrice,
  prodImg,
  prodId,
  buyProduct,
  removeProduct,
}: BasketItemProps) {
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
                  <button
                    type="button"
                    className="btn-light btn col-2"
                    onClick={() => removeProduct(prodId)}>
                    -
                  </button>
                  <strong className="quantity col-3">{prodAmount}</strong>
                  <button
                    type="button"
                    className="btn-light btn col-2"
                    onClick={() => buyProduct(prodId)}>
                    +
                  </button>
                  <strong
                    className="col-3"
                    style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
                    {" "}
                    {prodPrice * prodAmount} DKK
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

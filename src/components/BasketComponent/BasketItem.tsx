import { Fragment } from "react";

// CSS
import "./Basket.css";

interface BasketItemProps {
  prodName: String;
  prodAmount: number;
  prodPrice: number;
  prodImg: string;
}

export default function BasketItem({
  prodName,
  prodAmount,
  prodPrice,
  prodImg,
}: BasketItemProps) {
  return (
    <Fragment>
      <li className="list-group-item d-flex justify-content-between cart-title-header">
        <strong>
          {prodName} <img src={prodImg} className="product-img" />
        </strong>
        <strong className="quantity">{prodAmount}</strong>
        <strong>{prodPrice} DKK</strong>
      </li>
    </Fragment>
  );
}

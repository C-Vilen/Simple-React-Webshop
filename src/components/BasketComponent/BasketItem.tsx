import { Fragment } from "react";

// CSS
import './Basket.css'

interface BasketItemProps {
    prodName: String;
    prodAmount: number;
    prodPrice: number;
}

export default function BasketItem({ prodName, prodAmount, prodPrice }: BasketItemProps) {
    return (
        <Fragment>
            <li className="list-group-item d-flex justify-content-between cart-title-header">
                <strong>{prodName}</strong>
                <strong className="quantity">{prodAmount}</strong>
                <strong>{prodPrice}</strong>
            </li>
        </Fragment>
    );
}
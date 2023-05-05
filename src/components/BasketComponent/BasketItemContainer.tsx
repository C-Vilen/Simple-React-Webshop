import { Fragment, useContext, useEffect, useState } from "react";
import BasketItem from "./BasketItem";

// CSS
import "./Basket.css";
import { CustomerContext } from "../../App";

interface BasketItemContainerProps {
  customerName: String;
  basketAmount: number;
}
interface Product {
  productName: string;
  productPrice: number;
  imgSrc: string;
  productId: number;
  // add any other properties here
}

export default function BasketItemContainer({
  customerName,
  basketAmount,
}: BasketItemContainerProps) {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("customer context is undefined");
  }
  const { customer } = context;

  const [products, setProducts] = useState<Product[]>([]);
  if (!products) {
    throw new Error("couldn't get products");
  }
  useEffect(() => {
    fetch(`http://localhost:3000/baskets/${customer.customerId}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  let outputName = "";
  if (customerName === "") {
    outputName = `${customer.firstName}'s basket`;
  } else {
    outputName = `${customerName}'s basket`;
  }

  let outputAmount = 0;
  if (basketAmount > 0) {
    outputAmount = basketAmount;
  }

  // Count the number of each product in the basket
  const productCount = products.reduce((acc: any, product: Product) => {
    if (acc[product.productName]) {
      acc[product.productName]++;
    } else {
      acc[product.productName] = 1;
    }
    return acc;
  }, {});

  return (
    <Fragment>
      <div className="row cart-box">
        <div className="col-xl-6 order-xs-10 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">{outputName}</span>
          </h4>
          <ul className="list-group mb-3">
            {Object.keys(productCount).map((productName) => {
              const product = products.find(
                (p) => p.productName === productName
              );
              return product ? (
                <BasketItem
                  key={productName}
                  prodName={productName}
                  prodAmount={productCount[productName]}
                  prodPrice={product.productPrice}
                  prodImg={`./assets/images${product.imgSrc}`}
                  prodId={product.productId}
                />
              ) : (
                <div>Error: No items in the basket</div>
              );
            })}

            {/* Inserting items of products in the below div */}
            <div id="product-update-script"></div>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total</span>
              <strong id="totalAmount">{outputAmount} DKK</strong>
            </li>
            <li className="buy-li">
              <button className="buy-btn btn BlackButton">Buy</button>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

import { Fragment, useContext } from "react";

// CSS import
import "../../styles/styles.css";

// Components
import BasketItemContainer from "../../components/BasketComponent/BasketItemContainer";
import Footer from "../../components/Footer";

interface BasketProps {
  updateProductCount: (count: number) => void;
}
export default function Basket(props: BasketProps) {
  const { updateProductCount } = props;
  return (
    <Fragment>
      <BasketItemContainer
        customerName={""}
        basketAmount={0}
        updateProductCount={updateProductCount}
      />
      <Footer />
    </Fragment>
  );
}

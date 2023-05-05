import { Fragment, useContext } from "react";

// CSS import
import "../../styles/styles.css";

// Components
import BasketItemContainer from "../../components/BasketComponent/BasketItemContainer";
import Footer from "../../components/Footer";

export default function Basket() {
  return (
    <Fragment>
      <BasketItemContainer customerName={""} basketAmount={0} />
      <Footer />
    </Fragment>
  );
}

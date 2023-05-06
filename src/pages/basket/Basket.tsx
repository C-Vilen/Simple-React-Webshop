import { Fragment } from "react";

// CSS import
import "../../styles/styles.css";

// Components
import BasketItemContainer from "../../components/BasketComponent/BasketItemContainer";
import Footer from "../../components/StandardComponents/Footer";

export default function Basket() {
  return (
    <Fragment>
      <main className="content">
        <BasketItemContainer customerName={""} basketAmount={0} />
        <Footer />
      </main>
    </Fragment>
  );
}

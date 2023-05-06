import { Fragment, useContext } from "react";

// CSS import
import "../../styles/index.css";
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
      <div className="page-main">
        <BasketItemContainer
          customerName={""}
          basketAmount={0}
          updateProductCount={updateProductCount}
        />
      </div>

      <Footer />
    </Fragment>
  );
}

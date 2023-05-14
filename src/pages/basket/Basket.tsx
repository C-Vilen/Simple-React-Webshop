import { Fragment } from "react";

// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

// Components
import BasketItemContainer from "../../components/BasketComponent/BasketItemContainer";
import Footer from "../../components/StandardComponents/Footer";

interface BasketProps {
  updateProductCount: (count: number) => void;
}
export default function Basket(props: BasketProps) {
  const { updateProductCount } = props;
  return (
    <Fragment>
      <main className="content">
        <BasketItemContainer
          customerName={""}
          basketAmount={0}
          updateProductCount={updateProductCount}
        />
      </main>
      <Footer />
    </Fragment>
  );
}

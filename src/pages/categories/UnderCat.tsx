// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

//Import components
import ProdCardContainer from "../../components/ProdCardContainer";
import Footer from "../../components/Footer";
import { Fragment } from "react";

//export function
export default function UnderCat() {
  return (
    <Fragment>
      <ProdCardContainer heading="" products={[]} />
      <Footer />
    </Fragment>
  );
}

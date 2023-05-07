// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

//Import components
import ProdCardContainer from "../../components/ProdCardContainer";
import Footer from "../../components/StandardComponents/Footer";
import { Fragment } from "react";

//export function
export default function SubCategory() {
  return (
    <Fragment>
      <main className="content">
        <ProdCardContainer heading="" products={[]} />
        <Footer />
      </main>
    </Fragment>
  );
}

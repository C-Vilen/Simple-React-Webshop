// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

//Import components
import CatCardContainer from "../../components/CatCardContainer";
import ProdCardContainer from "../../components/ProdCardContainer";
import Footer from "../../components/Footer";
import { Fragment } from "react";

//Interface to allow us to have variable cat names. Maybe. Doesn't work tho.
interface OverCatProps {
    heading:String;
}

//export function
export default function OverCat() {
  return (
    <Fragment>
      <CatCardContainer catName="" />
      <ProdCardContainer heading="" products={[]}/>
      <Footer />
    </Fragment>
  );
}

// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

//Import components
import ProdCardContainer from "../../components/ProdCardContainer";
import Footer from "../../components/StandardComponents/Footer";
import { Fragment } from "react";
import SubCatCardContainer from "../../components/CategoryComponents/SubCatCardContainer";

interface SubCategoryProps {
  heading: string;

}

//export function
export default function SubCategory({heading} : SubCategoryProps) {
  heading = "tmp heading";
  return (
    <Fragment>
      <main className="content">
        <SubCatCardContainer heading={heading} ocId={1} />
        <ProdCardContainer heading="" products={[]} />        
      </main>
      <Footer />
    </Fragment>
  );
}

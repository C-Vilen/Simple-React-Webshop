// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";
import "./CategoryPage.css";

//Import components
import Footer from "../../components/StandardComponents/Footer";
import { Fragment } from "react";
import CatCardContainer from "../../components/CategoryComponent/CatCardContainer";

//Interface to allow us to have variable cat names. Maybe. Doesn't work tho.
interface OverviewCategoryProps {
  heading: String;
}

//export function
export default function OverviewCategory() {
  return (
    <Fragment>
      <main className="content">
        <div className="category-height">
          <CatCardContainer catName="" />
        </div>
        <Footer />
      </main>
    </Fragment>
  );
}

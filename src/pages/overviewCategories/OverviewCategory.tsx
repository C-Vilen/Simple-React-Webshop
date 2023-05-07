// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";
import "./categoryPage.css";

//Import components
import Footer from "../../components/StandardComponents/Footer";
import { Fragment } from "react";
import CatCardContainer from "../../components/CategoryComponent/CatCardContainer";

//export function
export default function OverviewCategory() {
  return (
    <Fragment>
      <main className="content">
        <div className="category-height">
          <CatCardContainer heading="All Categories" />
        </div>
        <Footer />
      </main>
    </Fragment>
  );
}

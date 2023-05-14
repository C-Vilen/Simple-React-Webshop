// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

//Import components
import Footer from "../../components/StandardComponents/Footer";
import { Fragment } from "react";
import CatCardContainer from "../../components/OverviewCategoryComponent/CatCardContainer";

//export function
export default function OverviewCategory() {
  return (
    <Fragment>
      <main className="content">
        <CatCardContainer heading="All Categories" />
      </main>
      <Footer />
    </Fragment>
  );
}

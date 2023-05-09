// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

//Import components
import ProdCardContainer from "../../components/ProdCardContainer";
import Footer from "../../components/StandardComponents/Footer";
import { Fragment, useEffect, useState } from "react";
import SubCatCardContainer from "../../components/CategoryComponents/SubCatCardContainer";
import { useLocation, useParams } from "react-router-dom";


//export function
export default function SubCategory() {
  // Getting overCategoryName and its ID from the overviewCategory page
  const { state } = useLocation();
  const ocId = state.ocId;
  const overCatName = state.overCatName;

  return (
    <Fragment>
      <main className="content">
        <SubCatCardContainer heading={overCatName} ocId={ocId} />
        <ProdCardContainer heading="" products={[]} />        
      </main>
      <Footer />
    </Fragment>
  );
}

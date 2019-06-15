import React from "react";

import LayoutStandardPage from "./../../layouts/layout-standard-page/layout-standard-page";

const IndexPage = (props: any) => {
  return (
    <LayoutStandardPage headerData={props.headerData} >
      <p>Alexander Technological institute of Thessaloniki 2015 - Now</p>
    </LayoutStandardPage>
  );
};

export default IndexPage;

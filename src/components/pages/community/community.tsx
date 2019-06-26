import React from "react";

import LayoutStandardPage from "./../../layouts/layout-standard-page/layout-standard-page";

const SkillsPage = (props: any) => {
  return (
    <LayoutStandardPage headerData={props.headerData}>
      <p>
        <a href="https://lambdaspace.gr/"> Lambdaspace </a>
      </p>
      <p>
        <a href="http://ieee.teithe.gr/"> IEEE ATEITH Student Branch </a>
      </p>
    </LayoutStandardPage>
  );
};

export default SkillsPage;

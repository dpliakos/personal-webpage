import React from "react";

import LayoutStandardPage from "./../../layouts/layout-standard-page/layout-standard-page";

const ExperiencePage = (props: any) => {
  return (
    <LayoutStandardPage headerData={props.headerData} title="Experience">
      <p>
        Google Summer Of Code  - Etetoolkit/Treematcher
      </p>
      <p>
        PointBlank
      </p>
      <p>
        Bear in mind
      </p>
    </LayoutStandardPage>
  );
};

export default ExperiencePage;
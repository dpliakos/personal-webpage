import React from "react";

import LayoutStandardPage from "./../../layouts/layout-standard-page/layout-standard-page";

const OpenSourcePage = (props: any) => {
  return (
    <LayoutStandardPage headerData={props.headerData} title="Open source">
      <p>
        Etetoolkit/Treematcher
      </p>
      <p>
        Mozlla/OSSN
      </p>
      <p>
        OpenSuse/OSEM
      </p>
    </LayoutStandardPage>
  );
};

export default OpenSourcePage;

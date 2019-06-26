import React from "react";

import LayoutStandardPage from "../../layouts/layout-standard-page/layout-standard-page";

const NotFoundPage = (props: any) => {
  return (
    <LayoutStandardPage headerData={props.headerData}>
      <p>
        404 - Page not found. <a href="/">Go back </a>
      </p>
    </LayoutStandardPage>
  );
};

export default NotFoundPage;

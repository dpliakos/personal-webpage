import React from "react";

import LayoutStandardPage from "./../../layouts/layout-standard-page/layout-standard-page";

const IndexPage = (props: any) => {
  return (
    <LayoutStandardPage headerData={props.headerData} title="@dpliakos">
      <p>
        I&apos;m a computer science student at the Alexander Technological
        institute of Thessaloniki and a web dev.
      </p>
      <p>I am member of Lambdaspace and IEEE ATEITH Student Branch.</p>
      <p>
        I tinker whatever is within my reach, from software to electronics, and
        I love to learn new stuff. This is a build test 8.
      </p>
    </LayoutStandardPage>
  );
};

export default IndexPage;



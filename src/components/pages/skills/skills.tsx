import React from "react";

import LayoutStandardPage from "./../../layouts/layout-standard-page/layout-standard-page";

const SkillsPage = (props: any) => {
  return (
    <LayoutStandardPage headerData={props.headerData} title="Skills">
      <p>
        Front end dev: <br />
        <ul>
          <li>ReactJS</li>
          <li> Sass </li>
        </ul>
      </p>
    </LayoutStandardPage>
  );
};

export default SkillsPage;

import React from "react";

import LayoutStandardPage from "./../../layouts/layout-standard-page/layout-standard-page";

const SkillsPage = (props: any) => {
  return (
    <LayoutStandardPage headerData={props.headerData} title="Skills">
      <div>
        <h4> Languages </h4>
        JS, Python, Java, PHP
      </div>
      <div>
        <h4> Tecchnologies </h4>
        ReactJs, NodeJs, Docker, Flite
      </div>
      <div>
        <h4> Tecchnologies </h4>
        ReactJs, NodeJs, Docker, Wordpress
      </div>
      <div>
        <h4>Databases</h4>
        MySQL, PSQl, MongoDB
      </div>
      <div>
        <h4>OS</h4>
        OpenSuse, Debian
      </div>
    </LayoutStandardPage>
  );
};

export default SkillsPage;

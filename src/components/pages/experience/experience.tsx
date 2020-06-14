import React from "react";

import LayoutStandardPage from "./../../layouts/layout-standard-page/layout-standard-page";

const ExperiencePage = (props: any) => {
  return (
    <LayoutStandardPage headerData={props.headerData} >
      <p>
        <a href="https://summerofcode.withgoogle.com/"> <b> Google Summer Of Code </b> </a>  <br />
        <a href="https://github.com/etetoolkit/treematcher"> Etetoolkit/treematcher </a> tool. <br/>
        A searching tool for data trees using regular expressions
      </p>
      <p>
        <a href="https://www.pointblank.gr/en"><b> PointBlank </b> </a> <br />
        High end designs on Drupal 8 front-end and ReactJS apps
      </p>
      <p>
        <a href="https://www.bearinmind.gr/"> <b> Bear in mind </b> </a> <br />
        Wordpress front-end. <br />  Apps using ReactJS and Flite php microframework
      </p>
      <p>
        <a href="https://it.auth.gr/el"> <b> IT Auth </b> </a> <br />
        Web developer at the <a href="https://universis.io/"> unviersis </a> team
      </p>
    </LayoutStandardPage>
  );
};

export default ExperiencePage;

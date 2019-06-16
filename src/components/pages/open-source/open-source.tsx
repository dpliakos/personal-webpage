import React from "react";

import LayoutStandardPage from "./../../layouts/layout-standard-page/layout-standard-page";

const OpenSourcePage = (props: any) => {
  return (
    <LayoutStandardPage headerData={props.headerData} >
      <p>
        <a href="https://github.com/etetoolkit/treematcher"> <b> Etetoolkit/Treematcher </b></a> <br/>
        A searching tool for data trees using regular expressions.
      </p>
      <p>
        <a href="https://github.com/ossn/ossn-frontend"> <b>Mozilla/OSSN </b></a> <br/>
         The homepage of Mozilla's Open Source Student Network
      </p>
      <p>
        <a href="https://gitlab.com/smart-campus-ateith"><b> OpenSCN </b></a> <br/>
        Open Smart Campus Network. An open source solution for scalable IoT backend.
      </p>
      <p>
        <a href="https://github.com/openSUSE/osem"> <b> OpenSuse/OSEM </b></a> <br />
        Open Source Event Manager. An event management tool tailored to Free and Open Source Software conferences
      </p>
      <p>
        <a href="https://github.com/dPliakos/dude"> <b> dpliakos/Dude </b> </a> <br/>
        Simple workflow management system 
      </p>
    </LayoutStandardPage>
  );
};

export default OpenSourcePage;

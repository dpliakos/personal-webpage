import React from "react";

import LayoutStandardPage from "./../../layouts/layout-standard-page/layout-standard-page";

const OpenSourcePage = (props: any) => {
  return (
    <LayoutStandardPage headerData={props.headerData}>
      <h4> Contact Info </h4>
      <ul>
        <li> dimitrispl96@gmail.com </li>
        <li> dpliakos@it.teithe.gr </li>
        <li> <a href="https://github.com/dPliakos/personal-webpage"> github  </a></li>
        <li> <a href="https://gitlab.com/dPliakos">gitlab </a> </li>
        <li> <a href="https://www.facebook.com/dimitris.pliakos.52"> Facebook </a> </li>
        <li> <a href="https://twitter.com/Dimitris_Pl"> twitter </a> </li>
      </ul>

      <h4> Community channels </h4>
      <ul>
        <li> Lambdaspace's mattermost @chat.lambdaspace.gr </li>
        <li> slack: OpenSCN </li>
        <li> slack: IEEE ATEITH SB</li>
        <li> slack: Drupal </li>
      </ul>
    </LayoutStandardPage>
  );
};

export default OpenSourcePage;


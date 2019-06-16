import React from "react";

import LayoutStandardPage from "./../../layouts/layout-standard-page/layout-standard-page";

const OpenSourcePage = (props: any) => {
  return (
    <LayoutStandardPage headerData={props.headerData}>
      <h4> Contact Info </h4>
      <ul>
        <li> <a href="mailto:dimitrispl96@gmail.com"> dimitrispl96@gmail.com </a> </li>
        <li> <a href="mailto:dpliakos@it.teithe.gr"> dpliakos@it.teithe.gr </a> </li>
        <li> <a href="https://github.com/dPliakos/personal-webpage"> github  </a></li>
        <li> <a href="https://gitlab.com/dPliakos">gitlab </a> </li>
        <li> <a href="https://www.facebook.com/dimitris.pliakos.52"> Facebook </a> </li>
        <li> <a href="https://twitter.com/Dimitris_Pl"> twitter </a> </li>
      </ul>

      <h4> Community channels </h4>
      <ul>
        <li> <a href="https://chat.lambdaspace.gr/"> Lambdaspace's mattermost @chat.lambdaspace.gr </a> </li>
        <li> slack: OpenSCN </li>
        <li> slack: IEEE ATEITH SB</li>
        <li> slack: Drupal </li>
      </ul>
    </LayoutStandardPage>
  );
};

export default OpenSourcePage;


import React from "react";
import { graphql } from "gatsby";

import Page from "./../components/pages/education/education";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageWrapper = (props: any) => {
  const person = props.data.allPersonalInfoJson.nodes[0];

  const headerData = {
    person: person,
  };

  return <Page headerData={headerData} />;
};
export default PageWrapper;

export const query = graphql`
  query {
    allPersonalInfoJson {
      nodes {
        ...PersonalInfo
      }
    }
  }
`;

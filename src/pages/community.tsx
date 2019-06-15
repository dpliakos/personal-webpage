import React from "react";
import { graphql } from "gatsby";

import IndexPage from "./../components/pages/community/community";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageWrapper = (props: any) => {
  const person = props.data.allPersonalInfoJson.nodes[0];

  const headerData = {
    person: person,
  };

  return <IndexPage headerData={headerData} />;
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

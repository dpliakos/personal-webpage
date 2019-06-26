import React from "react";
import { graphql } from "gatsby";

import NotFound from "./../components/pages/not-found/not-found";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageWrapper = (props: any) => {
  const person = props.data.allPersonalInfoJson.nodes[0];

  const headerData = {
    person: person,
  };

  return <NotFound headerData={headerData} />;
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

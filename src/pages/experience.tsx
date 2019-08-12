import React from "react";
import { graphql } from "gatsby";

import Page from "./../components/pages/experience/experience";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageWrapper = (props: any) => {
  const location = props.location;
  const person = props.data.allPersonalInfoJson.nodes[0];
  const socialMedia = props.data.allSocialMediaJson.nodes[0].social_media;

  const headerData = {
    location,
    person,
    socialMedia
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
    allSocialMediaJson {
      nodes {
        ...FragmentSocialMedia
      }
    }
  }
`;

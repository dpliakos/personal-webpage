import React from "react";
import { graphql } from "gatsby";

import IndexPage from "./../components/pages/community/community";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageWrapper = (props: any) => {
  const location = props.location;
  const person = props.data.allPersonalInfoJson.nodes[0];
  const socialMedia = props.data.allSocialMediaJson.nodes[0].social_media;
  const imageSharp = props.data.file.childImageSharp;

  const headerData = {
    location,
    person,
    socialMedia,
    imageSharp
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
    allSocialMediaJson {
      nodes {
        ...FragmentSocialMedia
      }
    }

    file(relativePath: { eq: "images/profile.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

import React from "react";
import { graphql } from "gatsby";

import Page from "./../components/pages/index/index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageWrapper = (props: any) => {
  const location = props.location;
  const person = props.data.allPersonalInfoJson.nodes[0];
  const socialMedia = props.data.allSocialMediaJson.nodes[0].social_media;

  const headerData = {
    location,
    person,
    socialMedia,
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

// import { Link } from "gatsby"
//
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
//
// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

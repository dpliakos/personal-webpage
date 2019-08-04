/*
  The basic layout.Contains the SEO and basic styles
*/

import React from "react";
import Logger from "js-logger";
import CSSPresets from "./../css-presets/css-presets";
import Header from "./../../components/header/header";
import SEO from "./../seo/seo";

import "./layout-base.scss";

interface LayoutBaseProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  headerData: any;
  title ?: string;
}


Logger.useDefaults();

const LayoutBase = (props: LayoutBaseProps) => {
  return (
    <div className="layout-base">
      <SEO title={props.title} />
      <CSSPresets />
      <div />
      <Header headerData={props.headerData} className="layout-base__header" />
      <main className="layout-base__content">{props.children}</main>
    </div>
  );
};

export default LayoutBase;

// ---------------
// import { Link } from "gatsby"
//
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// layout:
/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

// import React from "react"
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
//
// import Header from "./header"
// import "./layout.css"
//
// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: `0 auto`,
//             maxWidth: 960,
//             padding: `0px 1.0875rem 1.45rem`,
//             paddingTop: 0,
//           }}
//         >
//           <main>{children}</main>
//           <footer>
//             © {new Date().getFullYear()}, Built with
//             {` `}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//         </div>
//       </>
//     )}
//   />
// )
//
// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
//
// export default Layout

// ----------------- seo
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import React from "react"
// import PropTypes from "prop-types"
// import Helmet from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"
//
// function SEO({ description, lang, meta, title }) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `
//   )
//
//   const metaDescription = description || site.siteMetadata.description
//
//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={title}
//       titleTemplate={`%s | ${site.siteMetadata.title}`}
//       meta={[
//         {
//           name: `description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:title`,
//           content: title,
//         },
//         {
//           property: `og:description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:type`,
//           content: `website`,
//         },
//         {
//           name: `twitter:card`,
//           content: `summary`,
//         },
//         {
//           name: `twitter:creator`,
//           content: site.siteMetadata.author,
//         },
//         {
//           name: `twitter:title`,
//           content: title,
//         },
//         {
//           name: `twitter:description`,
//           content: metaDescription,
//         },
//       ].concat(meta)}
//     />
//   )
// }
//
// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// }
//
// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }
//
// export default SEO

"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var js_logger_1 = require("js-logger");
var index_1 = require("./../components/pages/index/index");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var IndexWrapper = function (props) {
    js_logger_1["default"].debug("IndexWrapperpropa", props);
    var person = props.data.allDataJson.edges[0].node;
    var headerData = {
        person: person
    };
    return <index_1["default"] headerData={headerData}/>;
};
exports["default"] = IndexWrapper;
exports.query = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    allDataJson {\n      edges {\n        node {\n          name\n          description\n          image {\n            url\n            alt\n          }\n        }\n      }\n    }\n  }\n"], ["\n  {\n    allDataJson {\n      edges {\n        node {\n          name\n          description\n          image {\n            url\n            alt\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
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
//
// "node_modules/breakpoint-sass/stylesheets",
//           "node_modules/chroma-sass/sass",
//           "node_modules/support-for/sass",
//           "node_modules/typey/stylesheets",
//           "src/components",
// "src"

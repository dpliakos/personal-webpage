import React from "react";

import LayoutBase from "./../layout-base/layout-base";
import HeaderProps from "./../../components/header/header";

import * as Sentry from '@sentry/browser';
Sentry.init({dsn: "https://6bee82ab4bf54a8290cdfdb00e7b38bb@sentry.io/1821085"});

import "./layout-standard-page.scss";

interface StandardPageProps {
  title?: string;
  headerData: HeaderProps;
  children: any;
}

const LayoutStandardPage = (props: StandardPageProps) => {
  const getHeader = () => {
    return (
      <div className="layout-standard-page__content-header">
        <h1> {props.title} </h1>
      </div>
    );
  };

  return (
    <LayoutBase headerData={props.headerData} tilte={props.title}>
      <article className="layout-standard-page">
        <div className="layout-standard-page__content">
          {props.title && getHeader()}
          <div className="layout-standard-page__content-body">{props.children}</div>
        </div>
      </article>
    </LayoutBase>
  );
};

export default LayoutStandardPage;

import React from "react";

import LayoutStandardPage from "./../../layouts/layout-standard-page/layout-standard-page";
import SkillRow from "./../../components/skill-row/skill-row";

import jsIcon from "./../../../images/icons/js.png";
import pythonIcon from "./../../../images/icons/python.png";
import javaIcon from "./../../../images/icons/java.png";
import phpIcon from "./../../../images/icons/php.png";

import reactIcon from "./../../../images/icons/react.png";
import nodeIcon from "./../../../images/icons/nodejs.png";
import gatsbyIcon from "./../../../images/icons/gatsby.png";
import angularIcon from "./../../../images/icons/angular.png";
import flaskIcon from "./../../../images/icons/flask.png";
import graphqlIcon from "./../../../images/icons/graphql.png";
import sassIcon from "./../../../images/icons/sass.png";

import dockerIcon from "./../../../images/icons/docker.png";
import dockerComposeIcon from "./../../../images/icons/docker-compose.png";
import gitlabIcon from "./../../../images/icons/gitlab.png";

import mochaIcon from "./../../../images/icons/mocha.svg";
import chaiIcon from "./../../../images/icons/chai.png";
import sinonIcon from "./../../../images/icons/sinon.png";
import jestIcon from "./../../../images/icons/jest.png";

import mariaIcon from "./../../../images/icons/maria-db.png";
import mongoIcon from "./../../../images/icons/mongo.png";
import psqlIcon from "./../../../images/icons/postgres.png";

import openSuseIcon from "./../../../images/icons/open-suse.png";
import debianIcon from "./../../../images/icons/debian.png";

import "./skills.scss";

const SkillsPage = (props: any) => {

  const skills = [
    {
      title: "Languages",
      items: [
        {
          title: "javascript",
          icon: jsIcon
        }, {
          title: "python",
          icon: pythonIcon
        }, {
          title: "java",
          icon: javaIcon
        }, {
          title: "PHP",
          icon: phpIcon
        }
      ]
    }, {
      title: "Tecchnology",
      items: [
        {
          title: "reactJS",
          icon: reactIcon
        }, {
          title: "nodeJS",
          icon: nodeIcon
        }, {
          title: "gatsbyJS",
          icon: gatsbyIcon
        }, {
          title: "angular",
          icon: angularIcon
        }, {
          title: "flask",
          icon: flaskIcon
        }, {
          title: "graphQL",
          icon: graphqlIcon
        }, {
          title: "Sass",
          icon: sassIcon
        }
      ]
    }, {
      title: "Testing",
      items: [
        {
          title: "mocha",
          icon: mochaIcon
        }, {
          title: "chai",
          icon: chaiIcon
        }, {
          title: "sinon",
          icon: sinonIcon
        }, {
          title: "jest",
          icon: jestIcon
        }, {
          title: "python unit testing",
          icon: pythonIcon
        }
      ]
    }, {
      title: "Building tools",
      items: [
        {
          title: "docker",
          icon: dockerIcon
        }, {
          title: "docker compose",
          icon: dockerComposeIcon
        }, {
          title: "gitlab pipelines",
          icon: gitlabIcon
        },
      ]
    }, {
      title: "Databases",
      items: [
        {
          title: "mariaDB",
          icon: mariaIcon
        }, {
          title: "postgreSQL",
          icon: psqlIcon
        }, {
          title: "mongoDB",
          icon: mongoIcon
        }
      ]
    }, {
      title: "OS",
      items: [
        {
          title: "open suse",
          icon: openSuseIcon
        }, {
          title: "debian",
          icon: debianIcon
        }
      ]
    }
  ];

  const skillsList = skills.map((skillSet, i) => {
    return (
      <li className="skills__item">
        <SkillRow skillBundle={skillSet} key={i} />
      </li>
    );
  });

  return (
    <LayoutStandardPage headerData={props.headerData} >
      <ul className="skills">
        {skillsList}
      </ul>
    </LayoutStandardPage>
  );
};

export default SkillsPage;

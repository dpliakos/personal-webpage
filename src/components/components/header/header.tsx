import React from "react";
import Logger from "js-logger";

import PersonalInfo, { Person } from "./../personal-info/personal-info";

import "./header.scss";

interface HeaderProps {
  headerData: {
    person: Person;
  };
}

class Header extends React.PureComponent<HeaderProps, {}> {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    const person = this.props.headerData.person;

    Logger.debug("HeaderProps.person", person);
    Logger.debug("HeaderProps: ", this.props);
    return (
      <header role="banner" className="header">
        <div className="header__personal-info">
          <PersonalInfo person={person} />
        </div>
        <nav></nav>
      </header>
    );
  }
}

export default Header;

import React from "react";

import PersonalInfo, { Person } from "./../personal-info/personal-info";
import NavigationBar from "./../navigation-bar/navigation-bar";

import "./header.scss";

interface HeaderProps {
  headerData: {
    person: Person;
  };
}

class Header extends React.PureComponent<HeaderProps, {}> {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    const person: Person = this.props.headerData.person;

    return (
      <header role="banner" className="header">
        <div className="header__contents-wrapper">
          <div className="header__personal-info">
            <PersonalInfo person={person} />
          </div>
          <NavigationBar />
        </div>
      </header>
    );
  }
}

export default Header;

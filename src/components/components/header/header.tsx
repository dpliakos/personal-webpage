import React from "react";

import PersonalInfo, { Person } from "./../personal-info/personal-info";
import NavigationBar from "./../navigation-bar/navigation-bar";
import SocialMediaBar, {SocialMedia} from "./../social-media-bar/social-media-bar";

import "./header.scss";

export interface HeaderProps {
  className: string;
  headerData: {
    location: any;
    person: Person;
    socialMedia: [SocialMedia];
    imageSharp?: any;
  };
}

class Header extends React.PureComponent<HeaderProps, {}> {
  // TODO: review the next line
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    const person: Person = this.props.headerData.person;
    const classes: string = ["header", this.props.className].join(" ");

    return (
      <header role="banner" className={classes}>
        <div className="header__contents-wrapper">
          <div className="header__personal-info">
            <PersonalInfo person={person} imageSharp={this.props.headerData.imageSharp} />
            <SocialMediaBar socialMedia={this.props.headerData.socialMedia} />
          </div>
          <NavigationBar location={this.props.headerData.location} />
        </div>
      </header>
    );
  }
}

export default Header;

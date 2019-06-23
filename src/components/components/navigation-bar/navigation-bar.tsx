/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React from "react";
import { Link } from "gatsby";
import { Menu } from 'react-feather';
import Logger from 'js-logger';

import "./navigation-bar.scss";

interface NavigationItem {
  label: string;
  route: string;
}

interface NaviagationBarState {
  menuOpen: boolean
}


const navlinks :NavigationItem[] = [
  {
    label: "About me",
    route: "/",
  },
  {
    label: "Education",
    route: "/education",
  },
  {
    label: "Open source",
    route: "/open-source",
  },
  {
    label: "Experience",
    route: "/experience",
  },
  {
    label: "skills",
    route: "/skills",
  },
  {
    label: "community",
    route: "/community",
  },
  // {
  //   label: "portfolio",
  //   route: "/portfolio",
  // },
  {
    label: "contact",
    route: "/contact",
  },
];

class NaviagationBar extends React.Component {

  constructor(props: {}) {
    super(props);

    this.state as NaviagationBarState = {
      menuOpen: false
    }
  }

  toogleMenuBar = () => {
    const snapshot = {...this.state};

    this.setState({
      menuOpen: !snapshot.menuOpen
    })
  }

  render() {
    const snapshot: NaviagationBarState = { ...this.state };

    const navItems = navlinks.map((item: NavigationItem, i: number) => {
      return (
        <div className="navigation-bar__item-wrapper" key={i}>
          <Link to={item.route} className="navigation-bar__item">
            {item.label}
          </Link>
        </div>
      );
    });

    const navigationBarClasses: string = [
      "navigation-bar",
      snapshot.menuOpen ? "navigation-bar--open" : "",
    ].join(" ");

    Logger.debug(this.props);

    // <div className="navigation-bar__wrapper">
    return (
      <>
        <div className="navigation-bar__header">
          <button className="navigation-bar__burger-wrapper" 
            onClick={() =>{this.toogleMenuBar()}}          
          >
            <Menu color="white" className="navigation-bar__burger" />
          </button>
        </div>
        <nav className={navigationBarClasses}>{navItems}</nav>
      </>
    );
  }
}

export default NaviagationBar;

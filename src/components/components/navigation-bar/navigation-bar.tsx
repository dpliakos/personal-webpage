/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React from "react";
import { Link } from "gatsby";
import { Menu } from "react-feather";

import "./navigation-bar.scss";

interface NavigationItem {
  label: string;
  route: string;
}

interface NaviagationBarState {
  menuOpen: boolean;
}

const navlinks: NavigationItem[] = [
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
    label: "Skills",
    route: "/skills",
  },
  {
    label: "Community",
    route: "/community",
  },
  // {
  //   label: "portfolio",
  //   route: "/portfolio",
  // },
  {
    label: "Contact",
    route: "/contact",
  },
];

class NaviagationBar extends React.Component {
  constructor(props: {}) {
    super(props);

    this.state = {
      menuOpen: false,
    };
  }

  toogleMenuBar = () => {
    // TODO: find a solution
    // @ts-ignore
    const snapshot: NaviagationBarState = {
      ...this.state,
    };

    this.setState({
      menuOpen: !snapshot.menuOpen,
    });
  };

  render() {
    const snapshot = { ...this.state };

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
      // TODO: find a solution
      // @ts-ignore
      snapshot.menuOpen ? "navigation-bar--open" : "",
    ].join(" ");

    return (
      <>
        <div className="navigation-bar__header">
          <button
            className="navigation-bar__burger-wrapper"
            onClick={() => {
              this.toogleMenuBar();
            }}
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

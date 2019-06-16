import React from "react";
import { Link } from "gatsby";

import "./navigation-bar.scss";

interface NavigationItem {
  label: string;
  route: string;
}

const Navigationbar = () => {
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

  const navItems = navlinks.map((item: NavigationItem, i: number) => {
    return (
      <div className="navigation-bar__item-wrapper" key={i}>
        <Link to={item.route} className="navigation-bar__item">
          {item.label}
        </Link>
      </div>
    );
  });

  return <nav className="navigation-bar">{navItems}</nav>;
};

export default Navigationbar;

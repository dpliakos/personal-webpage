import React from "react";
import { Link } from "gatsby";

import "./navigation-bar.scss";

const Navigationbar = () => {
  const navlinks = [
    {
      label: "About me",
      route: "/",
    },
    {
      label: "Education",
      route: "/eduction",
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
    {
      label: "portfolio",
      route: "/portfolio",
    },
    {
      label: "contact",
      route: "/contact",
    },
  ];

  const navItems = navlinks.map((item, i) => {
    return (
      <Link to={item.route} key={i} className="navigation-bar__item">
        {item.label}
      </Link>
    );
  });

  return <nav className="navigation-bar">{navItems}</nav>;
};

export default Navigationbar;

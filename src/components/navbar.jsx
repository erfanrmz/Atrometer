import React from "react";
import NavItem from "../commons/navItem";
const NavBar = () => {
  const itemLables = [
    {
      label: "راهکارها",
      endPoint: "/solutions",
      classes: "nav-item float-right",
    },
    {
      label: "محصولات",
      endPoint: "/products",
      classes: "nav-item float-right",
    },
    {
      label: "تماس با ما",
      endPoint: "/contact",
      classes: "nav-item float-right",
    },
    {
      label: "ورود",
      endPoint: "/login",
      classes: "nav-item float-left",
    },
    {
      label: "ثبت نام",
      endPoint: "/register",
      classes: "nav-item-register",
    },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li>
          <a href="#" className="pb-4 mx-4 float-right nav-item">
            <img
              className="max-h-12  inline border-white "
              src={process.env.PUBLIC_URL + "/atrovan_logo_crop.png"}
              alt="home"
            />
          </a>
        </li>
        {itemLables.map((item) => (
          <NavItem
            label={item.label}
            endpoint={item.endPoint}
            classes={item.classes}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

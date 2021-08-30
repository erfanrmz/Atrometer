import React from "react";

const NavBar = () => {
  // const itemLables = ["تماس با ما","راهکارها", "محصولات"]

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
        <li>
          <a
            className="nav-item float-right"
            href="/html/"
          >
            راهکارها
          </a>
        </li>
        <li>
          <a
            className="nav-item float-right"
            href="/css/"
          >
            محصولات
          </a>
        </li>
        <li>
          <a
            className="nav-item float-right"
            href="/js/"
          >
            تماس با ما
          </a>
        </li>
        <li>
          <a
            className="nav-item float-left"
            href="/css/"
          >
            ورود
          </a>
        </li>
        <li>
          <a href="#" className="nav-item-register  ">
          ثبت نام
        </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

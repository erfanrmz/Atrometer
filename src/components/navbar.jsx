import React from "react";

const NavBar = () => {
  // const itemLables = ["تماس با ما","راهکارها", "محصولات"]

  return (
    <nav className="w-full h-24  bg-blue-800  navbar relative ">
      <ul className="bottom-0 absolute w-full max-h-12">
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
            className="h-12 text-white text-base flex-1 mx-4 float-right nav-item border-opacity-0 hover:border-opacity-100 border-b-3 border-secondary"
            href="/html/"
          >
            راهکارها
          </a>
        </li>
        <li>
          <a
            className="h-12 text-white text-base flex-1  pb-4 mx-4 float-right nav-item border-opacity-0 hover:border-opacity-100 border-b-3 border-secondary"
            href="/css/"
          >
            محصولات
          </a>
        </li>
        <li>
          <a
            className="h-12 text-white text-base flex-1 pb-4 mx-4 float-right nav-item border-opacity-0 hover:border-opacity-100 border-b-3 border-secondary"
            href="/js/"
          >
            تماس با ما
          </a>
        </li>
        <li>
          <a
            className="h-12 text-white text-base flex pb-4 mx-6 ml-24  float-left nav-item"
            href="/css/"
          >
            ورود
          </a>
        </li>
        {/* <a className="text-white  flex-1  mx-4 nav-item float-left bg-white rounded-3xl text-blue-700 p-6" href="/js/">ثبت نام</a>  */}
        <button className="w-30 h-10 mx-4 ml-24 float-left bg-white rounded-2xl text-blue-700 text-base px-6 nav-item">
          ثبت نام
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;

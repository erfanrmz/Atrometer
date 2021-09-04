import React, { Component } from "react";
const Main = () => {
  return (
    <React.Fragment>
      <nav className="mr-28">
        <ul class="breadcrumb">
          <li>
            <a href="#">راهکارها</a>
          </li>
          <li>
            <a href="#">انتخاب ابعاد سازمانی</a>
          </li>
        </ul>
      </nav>

      <p className="font-extrabold mr-28 text-xl mt-4">
        مرحله انتخاب ابعاد سازمانی
      </p>

      <div className="bg-apartment-image bg-cover h-44 w-44">
        <div className="bg-gradient-to-b from-green-apartment to-green-apartment-fade bg-opacity-25 mix-blend-hard-light h-44 w-44 "></div>
      </div>
    </React.Fragment>
  );
};

export default Main;

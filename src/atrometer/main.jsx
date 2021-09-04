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

      <div className="bg-apartment-image bg-cover h-96 w-96 rounded-3xl">
        <div className="bg-gradient-to-b from-green-apartment to-green-apartment-fade bg-opacity-25 mix-blend-hard-light h-96 w-96 rounded-3xl relative ">
          <div className="flex flex-col absolute right-32 top-8  ">
            <img
              src={process.env.PUBLIC_URL + "/apartment-icon.svg"}
              alt="apartment-icon"
              className="w-12 h-12 flex-1 m-auto"
            />
            <p className="text-white font-extrabold text-5xl flex-1 mt-1  text-center ">
              آپارتمان
            </p>
            <p className="text-white font-light text-5xl flex-1 mt-1 text-center">
              10 روز رایگان
            </p>

            <button className="bg-dark-red rounded-3xl w-36 h-12   mt-16 flex-1 m-auto">
              انتخاب
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;

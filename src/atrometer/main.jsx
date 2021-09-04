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
      <ul className="carousel">
        <li>
          <div className="card bg-apartment-image">
            <div className="card-filter from-green-apartment to-green-apartment-fade">
              <div className="card-body">
                <img
                  src={process.env.PUBLIC_URL + "/apartment-icon.svg"}
                  alt="apartment-icon"
                />
                <p className="font-extrabold text-xl">آپارتمان</p>
                <p className="font-light text-5xl">10 روز رایگان</p>

                <button>انتخاب</button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card bg-tower-image">
            <div className="card-filter from-blue-tower to-blue-tower-fade">
              <div className="card-body">
                <img
                  src={process.env.PUBLIC_URL + "/apartment-icon.svg"}
                  alt="apartment-icon"
                />
                <p className="font-extrabold text-xl">برج</p>
                <p className="font-light text-5xl">200 هزار تومان</p>

                <button>انتخاب</button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="card bg-complex-image">
            <div className="card-filter from-red-complex to-red-complex-fade">
              <div className="card-body">
                <img
                  src={process.env.PUBLIC_URL + "/apartment-icon.svg"}
                  alt="apartment-icon"
                />
                <p className="font-extrabold text-xl">مجتمع</p>
                <p className="font-light text-5xl">10 روز رایگان</p>

                <button>انتخاب</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Main;

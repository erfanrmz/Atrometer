import React from "react";
const BreadCrumps = ({ current }) => {
  const paths = [
    {
      title: "راهکارها",
    },
    {
      title: "انتخاب ابعاد سازمانی",
    },
    {
      title: " انتخاب کنترهای آب و برق و گاز",
    },
    {
      title: "مدت زمان خرید لایسنس",
    },
  ];

  const renderColor = (index) => {
    console.log(index, current);
    if (index === current) return "black";
  };

  return (
    <React.Fragment>
      <nav className="breadCrumb-container">
        <ul class="breadcrumb">
          {paths.map((item, index) => {
            if (index <= current) {
              return (
                <li>
                  <a
                    style={{
                      color: renderColor(index),
                    }}
                    href="#"
                  >
                    {item.title}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </nav>
      <p className="stage-title">{paths[current].title}</p>
    </React.Fragment>
  );
};

export default BreadCrumps;

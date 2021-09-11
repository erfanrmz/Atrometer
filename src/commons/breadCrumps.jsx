import React from "react";
const BreadCrumps = ({ current }) => {
  const paths = [
    {
      title: "راهکارها",
      endPoint: "/solutions",
    },
    {
      title: "انتخاب ابعاد سازمانی",
      endPoint: "/orgDimensions",
    },
    {
      title: " انتخاب کنترهای آب و برق و گاز",
      endPoint: "#",
    },
    {
      title: "مدت زمان خرید لایسنس",
      endPoint: "/license",
    },
  ];

  const renderColor = (index) => {
    if (index === current) return "black";
  };

  return (
    <React.Fragment>
      <nav className="breadCrumb-container pt-8">
        <ul class="breadcrumb">
          {paths.map((item, index) => {
            if (index <= current) {
              return (
                <li>
                  <a
                    style={{
                      color: renderColor(index),
                    }}
                    href={item.endPoint}
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

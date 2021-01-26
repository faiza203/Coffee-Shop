import React from "react";
import BackgroundImage from "gatsby-background-image";

function BackgroundSection  ({ img, styleClass, title, children }) {
 return  <div>
    <BackgroundImage className={styleClass} fluid={img} />
    <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold ">
      {title}
    </h1>
    {children}
  </div>
};

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
};

export default BackgroundSection;

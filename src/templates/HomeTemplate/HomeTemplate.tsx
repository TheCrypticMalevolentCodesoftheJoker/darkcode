import React from "react";
import "./HomeTemplate.scss";

interface HomeTemplateProps {
  children: React.ReactNode;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({children}) => {
  return (
    <div className="container__homeTemplate">
      {children}
    </div>
  );
};

export default HomeTemplate;

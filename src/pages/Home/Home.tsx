import React, { useEffect } from "react";
import { iniciarMatriz } from "../../assets/ts/matrix";
import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate";
import './Home.scss';

const Home: React.FC = () => {
  useEffect(() => {
    iniciarMatriz();
  }, []);

  return (
    <HomeTemplate>
      <div className="container__home">
        <div className="matrix"></div>
      </div>
    </HomeTemplate>
  );
};

export default Home;

import React, { useState } from "react";
import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate";
import "./Login.scss";

const Login: React.FC = () => {
  return (
    <HomeTemplate>
      <form className="container__formulario__login">
        <h2 className="container__encabezado">Iniciar sesion</h2>
        <div className="container_campos_formulario">
          <span className="material-symbols-outlined">mail</span>
          <div className="campo_formulario">
            <input
              className="input"
              type="email"
              required
              autoComplete="off"
              placeholder="Email"
            />
            <span className="input-border"></span>
          </div>
        </div>
        <div className="container_campos_formulario">
          <span className="material-symbols-outlined">password</span>
          <div className="campo_formulario">
            <input
              className="input"
              type="password"
              required
              autoComplete="off"
              placeholder="Password"
            />
            <span className="input-border"></span>
          </div>
        </div>
        <button type="submit" className="btn_Procesar">
          <p className="access__icon">☠</p>PROCESAR
        </button>
      </form>
    </HomeTemplate>
  );
};

export default Login;

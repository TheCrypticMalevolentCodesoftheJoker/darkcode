import React from "react";
import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate";
import "./Registrar.scss";

const RegistrarPage: React.FC = () => {
  return (
    <HomeTemplate>
      <form className="container__formulario__registrar">
        <h2 className="container__encabezado">Registrarse</h2>
        <div className="container_campos_formulario">
          <span className="material-symbols-outlined">person</span>
          <div className="campo_formulario">
            <input
              className="input"
              type="text"
              required
              autoComplete="off"
              placeholder="Nombre completo"
            />
            <span className="input-border"></span>
          </div>
        </div>
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
          <span className="material-symbols-outlined">call</span>
          <div className="campo_formulario">
            <input
              className="input"
              type="number"
              required
              autoComplete="off"
              placeholder="Telefono"
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

export default RegistrarPage;

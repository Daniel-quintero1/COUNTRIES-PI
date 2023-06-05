import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {
  return (
    <div className={style.navContain}>
      <Link to="/home">
        <p>Volver al Home</p>
      </Link>
      <SearchBar />
      <Link to="/form">
        <p>Crea Una Ciudad </p>
      </Link>
      <Link to="/">
        <p>Salir</p>
      </Link>
    </div>
  );
};

export default NavBar;

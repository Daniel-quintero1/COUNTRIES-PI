import { useState } from "react";
import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../Redux/Actions";

const SearchBar = () => {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const handlerInput = (e) => {
    setCountry(e.target.value);
  };
  const handlerSearch = (e) => {
    e.preventDefault();
    dispatch(getCountriesByName(country));
    setCountry("")
  };
  return (
    <div className={style.cssSearch}>
      <input
        type="text"
        placeholder="Escribe el Pais"
        value={country}
        onChange={handlerInput}
      />
      <button onClick={handlerSearch}>Busca El Pais</button>
    </div>
  );
};

export default SearchBar

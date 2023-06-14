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
  };
  return (
    <div className={style.cssSearch}>
      <input
        type="text"
        placeholder="Writing Name of Countries"
        value={country}
        onChange={handlerInput}
      />
      <button onClick={handlerSearch}>SEARCH COUNTRIES</button>
    </div>
  );
};

export default SearchBar

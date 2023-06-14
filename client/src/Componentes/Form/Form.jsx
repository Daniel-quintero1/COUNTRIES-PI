import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getCountries } from "../../Redux/Actions";
import Validation from "../Validation/Validation";
import axios from "axios";
import { Link } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const country = useSelector((state) => state.countries);

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    season: [],
    duration: "",
    countries: [],
  });
  const [error, setError] = useState({
    name: "",
    difficulty: "",
    season: "",
    duration: "",
    countries: "",
  });
  const handlerForm = (e) => {
    const nam = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [nam]: value });
    setError(Validation({ ...form, [nam]: value }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    alert("Send Information");
    axios
      .post(`http://localhost:3001/activity`, form)
      .then((res) => alert("Activities Add"))
      .catch((err) => alert(err));
    setForm({
      name: "",
      difficulty: "",
      season: [],
      duration: "",
      countries: [],
    });
  };
  const handlerSelect = (e) => {
    const value = e.target.value;
    const selectCountries = form.countries;
    if (selectCountries.includes(value)) {
      setForm({
        ...form,
        countries: selectCountries.filter((filtra) => filtra !== value),
      });
    } else {
      setForm({ ...form, countries: [...selectCountries, value] });
    }
  };
  const handlerSelectSeason = (e) => {
    const value = e.target.value;
    const selectCountries = form.season;
    if (selectCountries.includes(value)) {
      setForm({
        ...form,
        season: selectCountries.filter((filtra) => filtra !== value),
      });
    } else {
      setForm({ ...form, season: [...selectCountries, value] });
    }
  };
  const buscarId = (id) => {
    const countriesActivity = country.find((e) => e.id === id);
    return countriesActivity.name;
  };
  const countrieMap = form.countries.map((e) => buscarId(e));

 
  return (
    <form onSubmit={handlerSubmit}>
      <hr />
      <div>
        <label>Name of Activities </label>
        <input
          type="text"
          value={form.name}
          onChange={handlerForm}
          name="name"
          placeholder="Writing Activities..."
        />
        <span>{error.name ? error.name : " "}</span>
      </div>
      <div>
        <label>Level of Difficulty </label>
        <input
          type="text"
          value={form.difficulty}
          onChange={handlerForm}
          name="difficulty"
          placeholder="Writing  Level Difficulty..."
        />
        <span>{error.difficulty}</span>
      </div>
      <div>
        <label>Time of Duration </label>
        <input
          type="text"
          value={form.duration}
          onChange={handlerForm}
          name="duration"
          placeholder="Writing Time Duration..."
        />
        <span>{error.duration}</span>
      </div>
      <div>
      <label>Select Season </label>
        <input
          type="text"
          value={form.season.map((e)=> e)}
          onChange={handlerForm}
          name="season"
          placeholder="Select Season..."
        />
        <select name="season" multiple={true} value={form.season} onChange={handlerSelectSeason}  >
       {["Verano", "Otoño", "Invierno", "Primavera"].map((e, i)=> <option key={i} value={e}>{e}</option>)}
        </select>
        <span>{error.season}</span>
      </div>
      <div>
        <label>Name of Countries </label>
        <input
          type="text"
          value={countrieMap}
          onChange={handlerForm}
          name="countries"
          placeholder="Select Countries..."
        />
        <select
          name="countries"
          multiple={true}
          value={form.countries}
          onChange={handlerSelect}
        >
          {country.map((e)=> (
            <option key={e.id} value={e.id}>{e.name}</option>
          ))}
        </select>
        <span>{error.countries}</span>
      </div>
      <button type="submit">ADD NEW tourist activity</button>
      <hr />
      <Link to="/home">Back To Home</Link>
      <hr />
      <Link to="/landing">Back To Landing</Link>
    </form>
  );
};

export default Form;

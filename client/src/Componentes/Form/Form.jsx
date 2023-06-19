import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getCountries } from "../../Redux/Actions";
import Validation from "../Validation/Validation";
import axios from "axios";

const Form = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const country = useSelector((state) => state.countries);

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    // season: [],
    season: "",
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
      .catch((error) => {
        // Manejar el error de Bad Request (400)
        if (error.response && error.response.status === 400) {
          alert("Bad Request: Invalid form data"); // Mostrar mensaje de error específico
          // También puedes actualizar el estado para mostrar el error en el formulario, por ejemplo:
          // setError({ ...error, form: "Invalid form data" });
        } else {
          // Otro tipo de error
          alert("Error: " + error.message);
        }
      })
    setForm({
      name: "",
      difficulty: "",
      // season: [],
      season: "",
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
  // const handlerSelectSeason = (e) => {
  //   const value = e.target.value;
  //   const selectCountries = form.season;
  //   if (selectCountries.includes(value)) {
  //     setForm({
  //       ...form,
  //       season: selectCountries.filter((filtra) => filtra !== value),
  //     });
  //   } else {
  //     setForm({ ...form, season: [...selectCountries, value] });
  //   }
  // };
  const buscarId = (id) => {
    const countriesActivity = country.find((e) => e.id === id);
    return countriesActivity.name;
  };
  const countrieMap = form.countries.map((e) => buscarId(e));

 
  return (
    <form onSubmit={handlerSubmit}>
      <hr />
      <div>
        <label>Actividad Turistica</label>
        <input
          type="text"
          value={form.name}
          onChange={handlerForm}
          name="name"
          placeholder="Escribe tu Actividad..."
        />
        <span>{error.name ? error.name : " "}</span>
      </div>
      <div>
        <label>Nivel de Dificultad </label>
        <input
          type="text"
          value={form.difficulty}
          onChange={handlerForm}
          name="difficulty"
          placeholder="Escribe tu Dificultad..."
        />
        <span>{error.difficulty}</span>
      </div>
      <div>
        <label>Tiempo de Duracion</label>
        <input
          type="text"
          value={form.duration}
          onChange={handlerForm}
          name="duration"
          placeholder="Escribe el tiempo..."
        />
        <span>{error.duration}</span>
      </div>
      <div>
      <label>Temporada del Año</label>
      <input type="text" value={form.season} onChange={handlerForm} name="season" placeholder="Escribe tu Temporada" />
        {/* <input
          type="text"
          value={form.season.map((e)=> e)}
          onChange={handlerForm}
          name="season"
          placeholder="Select Season..."
        />
        <select name="season" multiple={true} value={form.season} onChange={handlerSelectSeason}  >
       {["Verano", "Otoño", "Invierno", "Primavera"].map((e, i)=> <option key={i} value={e}>{e}</option>)}
        </select> */}
        <span>{error.season}</span>
      </div>
      <div>
        <label>Selecciona Tu Pais</label>
        <input
          type="text"
          value={countrieMap}
          onChange={handlerForm}
          name="countries"
          placeholder="Selccion el Pais..."
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
      <button type="submit">Agrega la Actividad</button>
      <hr />
    </form>
  );
};

export default Form;

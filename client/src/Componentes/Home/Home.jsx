import { useEffect, useState } from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanBDD,
  filterByActivities,
  filterByContinents,
  getActivities,
  getCountries,
  ordenByPopulation,
  orderByName,
  setCurrentPage,
} from "../../Redux/Actions";

const Home = () => {
  const dispatch = useDispatch();
  const activities = useSelector ((state) => state.activities)
  // eslint-disable-next-line
  const [selectContinent, setSelectContinent] = useState("");
  // eslint-disable-next-line
  const continentePrevio = useSelector(
    (state) => state.countries
  );

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities())
  }, [dispatch]);

  const onClickTodo = () => {
    dispatch(getCountries());
    dispatch(cleanBDD());
    dispatch(setCurrentPage(1));
  };
    const handleContinentFilter = (e) => {
      const continent = e.target.value;
      console.log(continent);
      if (!continent) {
        dispatch(getCountries());
      } else {
        dispatch(filterByContinents(continent));
      }
      setSelectContinent(continent);
    };
  function handleFilterByAct(e){
    e.preventDefault()
    const value = e.target.value
    value > 0 ? dispatch(getCountries()):
    dispatch(filterByActivities(value))
    dispatch(setCurrentPage(1))
  }

  return (
    <div>
      <div>
        <select
          name="orderByName"
          onChange={(e) => dispatch(orderByName(e.target.value))}
        >
          {["Ascendente", "Descendente"].map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
        Ordena por Nombre
      </div>
      <div>
      <select name="filterByContinents" onChange={handleContinentFilter}>
        <option value="">Todos los continentes</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
      </select>
        Filtra por Continente
      </div>
      <div>
        <select
          name="ordenByPopulation"
          onChange={(e) => dispatch(ordenByPopulation(e.target.value))}
        >
          {["Menor a Mayor", "Mayor a Menor"].map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))} 
        </select>
        Ordena por Poblacion{" "}
      </div>
      <div>
        Busca por Actividad
        {activities && activities.length === 0 ? (
          <p>No se han creado actividades</p>
        ) : (
          <select onChange={(e) => handleFilterByAct(e)}>
            <option value="Todos">Todos</option>
            {activities.map((e) => (
              <option value={e.name} key={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <button value="TODO" onClick={onClickTodo}>
        Paises
      </button>
      <CardsContainer />
    </div>
  );
};

export default Home;

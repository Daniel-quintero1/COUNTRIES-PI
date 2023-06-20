import { useEffect} from "react";
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
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  const onClickTodo = () => {
    dispatch(getCountries());
    dispatch(cleanBDD());
    dispatch(setCurrentPage(1));
  };

  const handleContinentFilter = (e) => {
    const continent = e.target.value;
    dispatch(filterByContinents(continent));
    dispatch(setCurrentPage(1));
  };

  const handleByActivities = (e) => {
    const value = e.target.value;
    if (value === "Todos") {
      dispatch(getCountries());
    } else {
      dispatch(filterByActivities(value));
    }
    dispatch(setCurrentPage(1));
  };


  return (
    <div>
      <div>
        <select
          name="orderByName"
          onChange={(e) => dispatch(orderByName(e.target.value))}
        >
          <option value="" key="-" name="-">
            {" "}
            -{" "}
          </option>
          <option value="asc" key="asc" name="asc">
            {" "}
            A-Z{" "}
          </option>
          <option value="Desc" key="Desc" name="dsc">
            {" "}
            Z-A{" "}
          </option>
        </select>
        Ordena por Nombre
      </div>
      <div>
        <select
          name="filterByContinents"
          onChange={(e) => handleContinentFilter(e)}
        >
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
         <option value="" name="--" key="--">   -   </option>
                <option value="POA" name="POA" key="POA">↑ population</option>
                <option value="POE" name="POE" key="POE">↓ population</option>
        </select>
        Ordena por Poblacion{" "}
      </div>
      <div>
        Busca por Actividad
        {activities && activities.length === 0 ? (
          <p>No se han creado actividades</p>
        ) : (
          <select onChange={(e) => handleByActivities(e)}>
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
      <CardsContainer  />
    </div>
  );
};

export default Home;

import { useEffect } from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { getCountries, ordenByPopulation, orderByContinents, orderByName } from "../../Redux/Actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <div>
        <select
          name="orderByName"
          onChange={(e) => dispatch(orderByName(e.target.value))}
        >
          {["Nombre Ascendente", "Nombre Descendente"].map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          name="orderByContinents"
          onChange={(e) => dispatch(orderByContinents(e.target.value))}
        >
          {["Ascendente Continents", "Descendente Continents"].map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          name="ordenByPopulation"
          onChange={(e) => dispatch(ordenByPopulation(e.target.value))}
        >
          {["Ascendente Population", "Descendente Population"].map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
      </div>
      <button>BDD</button>
      <CardsContainer />
    </div>
  );
};

export default Home;

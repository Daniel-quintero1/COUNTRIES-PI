import { useEffect } from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { cleanBDD, getCountries, getFrom, ordenByPopulation, orderByContinents, orderByName, setCurrentPage } from "../../Redux/Actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const onClickBdd = (e)=> {
    const value = e.target.value
    dispatch(getFrom(value))
    dispatch(cleanBDD())
    dispatch(setCurrentPage(1))
  }
  const onClickTodo = ()=> {
    dispatch(getCountries())
    dispatch(cleanBDD())
    dispatch(setCurrentPage(1))
  }

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
      <button value="BDD" onClick={onClickBdd}>BDD</button>
      <button value="TODO" onClick={onClickTodo}>TODO</button>
      <CardsContainer />
    </div>
  );
};

export default Home;

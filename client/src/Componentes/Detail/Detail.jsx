// import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getCountriesId } from "../../Redux/Actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const {name, continents, capital, flag, area, population, subregion, activities} = useSelector((state)=> state.countriesDetail)
  // const navigate = useNavigate();
  useEffect(() => {
  dispatch(getCountriesId(id))
  }, [dispatch, id]);
console.log(activities);
  return (
    <div className={style.detailCss}>
      <div>
        <h1>Nombre de la Ciudad: {name}</h1>
        <h2>Id: {id}</h2>
        <h4>Nombre del Continente: {continents}</h4>
        <h5>Capital: {capital}</h5>
        <h6>Subregion: {subregion}</h6>
        <h6>Area: {area}</h6>
        <div>
          <img src={flag} alt={name} />
        </div>
        <h6>Poblacion: {population}</h6>
      </div>
      {/* <button
      onClick={()=> {
        navigate("/home")
      }}>Back to Home</button> */}
    </div>
  );
};

export default Detail;

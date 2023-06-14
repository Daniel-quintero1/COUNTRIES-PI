import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { setCurrentPage } from "../../Redux/Actions";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const countries = useSelector((state) => state.countries);
  const countriesBdd = useSelector((state) => state.countriesBdd);
  // eslint-disable-next-line
  const currentPage = useSelector((state) => state.currentPage);
  const inicialCountries = countriesBdd.length > 0 ? countriesBdd : countries;

  const [currentCard, setCurrentCard] = useState([inicialCountries]);
  const totalPage = Math.ceil(inicialCountries.length / 10);
  const previusPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };
  const nextPage = () => {
    if (currentPage < totalPage) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };
  useEffect(() => {
    const starIndex = (currentPage - 1) * 10;
    const endIndex = starIndex + 10;
    setCurrentCard(inicialCountries.slice(starIndex, endIndex));
  }, [currentPage, inicialCountries]);
  return (
    <div>
      <div className={style.container}>
        {currentCard.map((country) => (
          <Card key={country.id} {...country} />
        ))}
      </div>
      
      <button onClick={previusPage}>PREVIUS</button>
      <button onClick={nextPage}>NEXT</button>
    </div>
  );
};

export default CardsContainer;

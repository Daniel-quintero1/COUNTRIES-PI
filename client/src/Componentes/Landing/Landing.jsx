import { useNavigate } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
    const navigate = useNavigate()
  return (
    <div className={style.landingCss}>
      <h1>CIUDAD</h1>
      <p>
        "Cuando te dispones a explorar una página dedicada a una ciudad, es
        fundamental tener en cuenta ciertos aspectos clave para una experiencia
        completa. Lo primero que debes conocer es la historia y la cultura de la
        ciudad en cuestión. Sumérgete en sus tradiciones, su patrimonio y su
        rica historia para comprender mejor su identidad única. Además, es
        esencial familiarizarte con los principales puntos de interés y
        atracciones turísticas que ofrece la ciudad, como monumentos icónicos,
        museos fascinantes y paisajes impresionantes. No olvides investigar
        sobre la gastronomía local, ya que probar los platos típicos te
        permitirá descubrir los sabores auténticos de la región.
      </p>
      <button onClick={()=> {
        navigate("/home")
      }}>
        INGRESAR a NUESTRA PAGINA
      </button>
    </div>
  );
};

export default Landing;

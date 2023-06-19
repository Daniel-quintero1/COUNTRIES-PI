import { useNavigate } from "react-router-dom";
import style from "./Landing.module.css";
import backgroundImage from "../../Imagenes/img3.jpg";
import gifImage from "../../Imagenes/gif1.gif";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className={style.landingContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={style.content}>
        <h1 className={style.h1}>Bienvenido</h1>
        <p>
          "Entra a nuestra Pagina y conoce mas Sobre mas de 200+ Paises"
        </p>
      </div>
      <img src={gifImage} className={style.gifImage} alt="World Map" onClick={()=>navigate("/home") } />
      <p className={style.p}>INGRESAR</p>
    </div>
  );
};

export default Landing;

import styles from "./Home.module.css";
import imageForLargeScreens from "../../assets/home-for-large-screens.jpg";
import imageForSmallScreens from "../../assets/home-for-small-screens.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowWidthChange = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowWidthChange);

    return () => {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  }, []);

  return (
    <main className={styles.main}>
      <img
        src={innerWidth > 930 ? imageForLargeScreens : imageForSmallScreens}
        alt="Una mujer usando un equipo de magnetoterapia"
        className={styles.image}
      />
      <div className={styles.container}>
        <h1 className={styles.title}>Alquiler de equipos de magnetoterapia en La Plata</h1>
        <p className={styles.text}>
          Acelerá tu recuperación desde casa con nuestros <strong>equipos de magnetoterapia</strong>
          . Son fáciles de usar y te brindamos todas las instrucciones necesarias para que los
          aproveches al máximo, sin complicaciones. Con más de 15 años de experiencia, te
          acompañamos en cada paso de tu <strong>rehabilitación</strong>.
        </p>
        <Link to="/contacto" className={styles.button}>
          Contacto
        </Link>
      </div>
    </main>
  );
};

export default Home;

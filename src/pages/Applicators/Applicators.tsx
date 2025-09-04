import styles from "./Applicators.module.css";
import coils from "../../assets/magnetic-therapy-coils.jpg";
import tunnel from "../../assets/tunnel-applicator.jpg";

const Equipment = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Tipos de aplicadores de magnetoterapia</h1>
      <div className={styles.container}>
        <section>
          <h2 className={styles.subtitle}>Bobinas planas</h2>
          <img src={coils} alt="Bobinas planas" className={styles.image} />
        </section>
        <section>
          <h2 className={styles.subtitle}>Túnel</h2>
          <img src={tunnel} alt="Túnel" className={styles.image} />
        </section>
      </div>
      <p className={styles.text}>
        Contanos para qué zona del cuerpo necesitás tratamiento y te vamos a recomendar el aplicador
        de magnetoterapia más adecuado para vos.
      </p>
    </main>
  );
};

export default Equipment;

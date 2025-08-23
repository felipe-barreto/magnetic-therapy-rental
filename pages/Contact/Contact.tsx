import styles from "./Contact.module.css";
import logo from "../../src/assets/whatsapp-logo.png";

const Contact = () => {
  return (
    <main className={styles.main}>
      <section className={styles.contactSection}>
        <h1 className={styles.title}>Contacto</h1>
        <a
          href="https://wa.me/5492216377979?text=Quisiera consultar por el alquiler de un equipo"
          className={styles.whatsappLink}>
          <img src={logo} alt="Logo de WhatsApp" className={styles.whatsappLogo} />
          <p className={styles.number}>+54 9 221 637-7979</p>
        </a>
        <p className={styles.text}>
          Para alquilar un equipo envianos un mensaje por este medio. No contamos con atención
          telefónica en este número.
        </p>
      </section>
      <section className={styles.locationSection}>
        <h2 className={styles.subtitle}>Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.568359838775!2d-57.97692687786623!3d-34.917280189606785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7c7ed40df21%3A0xe08bd35175db98bc!2sPl.%20G%C3%BCemes%2C%20B1902%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1752002706696!5m2!1ses-419!2sar"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.map}></iframe>
      </section>
    </main>
  );
};

export default Contact;

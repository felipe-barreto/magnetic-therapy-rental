import styles from "./Footer.module.css";
import logo from "../../src/assets/whatsapp-logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>Copyright © AlquilerMagnetoLP 2025</p>
      <a
        href="https://wa.me/5492216377979?text=Quisiera consultar por el alquiler de un equipo"
        className={styles.whatsappLink}>
        <img src={logo} alt="Logo de WhatsApp" className={styles.whatsappLogo} />
        <p className={styles.number}>+54 9 221 637-7979</p>
      </a>
    </footer>
  );
};

export default Footer;

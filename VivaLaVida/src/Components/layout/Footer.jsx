import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.section}>
          <h3>SIGA NAS REDES SOCIAIS</h3>
          <ul>
            <li><FaFacebookF className={styles.icon} /> Facebook</li>
            <li><FaInstagram className={styles.icon} /> Instagram</li>
            <li><FaTwitter className={styles.icon} /> Twitter</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>SUPORTE</h3>
          <ul>
            <li><FaEnvelope className={styles.icon} /> Email</li>
            <li><FaWhatsapp className={styles.icon} /> WhatsApp</li>
            <li><FaPhone className={styles.icon} /> Telefone</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

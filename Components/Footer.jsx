import Link from 'next/link';
import Icon from './Icon';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return <footer className={styles.footer}>
    <div className={`shell ${styles.top}`}>
      <div><Link href="/"><a className={styles.brand}>Mirsú<span>CABAÑAS</span></a></Link><p>Un lugar para bajar el ritmo.<br />Villa General Belgrano, Córdoba.</p></div>
      <div><h2>Encontranos</h2><a href="https://www.google.com/maps/search/?api=1&query=Av.+El+Mirador+526+Villa+General+Belgrano+Cordoba" target="_blank" rel="noreferrer">Av. El Mirador 526 <Icon name="arrow" size={15} /></a><p>Villa General Belgrano, Córdoba<br />Argentina</p></div>
      <div><h2>Hablemos de tu estadía</h2><a href="https://wa.me/5493546457020" target="_blank" rel="noreferrer">WhatsApp: +54 9 3546 457020</a><a className={styles.email} href="mailto:cabanasmirsuvgbcordoba@gmail.com">cabanasmirsuvgbcordoba@gmail.com</a></div>
    </div>
    <div className={`shell ${styles.bottom}`}><span>© {new Date().getFullYear()} Cabañas Mirsú. Todos los derechos reservados.</span><a href="https://silvina-portfolio.vercel.app/" target="_blank" rel="noreferrer">Diseño y desarrollo · SilviDev</a></div>
  </footer>;
}

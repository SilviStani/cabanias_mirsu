import { useRef, useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const links = [['La cabaña', '/#cabana'], ['Galería', '/#galeria'], ['Ubicación', '/#ubicacion']];
  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <header className={styles.header}>
      <div className={`shell ${styles.inner}`}>
        <Link href="/"><a className={styles.brand} aria-label="Cabañas Mirsú, inicio" onClick={() => setOpen(false)}><Icon name="home" size={36} /><span>Mirsú<small>CABAÑAS · VILLA GENERAL BELGRANO</small></span></a></Link>
        <button ref={toggle} type="button" className={styles.toggle} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
        <nav id="main-navigation" aria-label="Navegación principal" className={`${styles.nav} ${open ? styles.open : ''}`} onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); toggle.current.focus(); } }}>
          {links.map(([label, href]) => <Link key={href} href={href}><a onClick={() => setOpen(false)}>{label}</a></Link>)}
          <Link href="/#consulta"><a className="button" onClick={() => setOpen(false)}>Consultar estadía <Icon name="arrow" size={17} /></a></Link>
        </nav>
      </div>
    </header>
    <div className={styles.mobileBar}><span>Tu próxima escapada<small>Villa General Belgrano, Córdoba</small></span><Link href="/#consulta"><a className="button">Consultar <Icon name="arrow" size={16} /></a></Link></div>
  </>;
}

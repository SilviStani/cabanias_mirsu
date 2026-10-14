import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { data } from '../imagenes';
import Icon from '../Components/Icon';
import styles from '../styles/Cabana.module.css';

export default function Cabana() {
  return <div className={`shell ${styles.page}`}>
    <Head><title>Conocé la cabaña | Cabañas Mirsú</title><meta name="description" content="Recorré el interior, el exterior y los espacios de Cabañas Mirsú en Villa General Belgrano." /></Head>
    <p className="eyebrow">UN LUGAR PARA DESCANSAR</p><h1>Conocé cada rincón.</h1><p className={styles.intro}>Dos dormitorios, cocina equipada y un parque para disfrutar. Elegí un recorrido y mirá las fotos en detalle.</p>
    <div className={styles.cards}>{data.map(item => <Link key={item.id} href={`/cabanas/${item.name}`}><a className={styles.card}><div className={styles.image}><Image src={`/img/${item.photo}`} alt={item.title} layout="fill" objectFit="cover" sizes="(max-width: 760px) 90vw, 45vw" /></div><div className={styles.caption}><h2>{item.name === 'externa' ? 'El exterior y el parque' : 'Puertas adentro'}</h2><Icon name="arrow" /></div><p>{item.desc}</p></a></Link>)}</div>
    <Link href="/#consulta"><a className="button">Consultar disponibilidad <Icon name="arrow" size={18} /></a></Link>
  </div>;
}

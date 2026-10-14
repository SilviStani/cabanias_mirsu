import Seo from '../Components/Seo';
import { breadcrumbSchema } from '../lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { data } from '../imagenes';
import Icon from '../Components/Icon';
import styles from '../styles/Cabana.module.css';

export default function Cabana() {
  return <div className={`shell ${styles.page}`}>
    <Seo title="Fotos de la cabaña en Villa General Belgrano | Mirsú" description="Conocé Cabañas Mirsú en fotos: dos dormitorios, cocina equipada, parque, quincho con asador y cochera. Alojamiento para 2 a 6 en Villa General Belgrano." path="/cabana" structuredData={breadcrumbSchema([{ name: 'Inicio', path: '/' }, { name: 'La cabaña', path: '/cabana' }])} />
    <p className="eyebrow">UN LUGAR PARA DESCANSAR</p><h1>Conocé la cabaña Mirsú.</h1><p className={styles.intro}>Tu alojamiento para 2 a 6 personas en Villa General Belgrano, Córdoba. Dos dormitorios, cocina equipada y un parque para disfrutar. Elegí un recorrido y mirá las fotos en detalle.</p>
    <div className={styles.cards}>{data.map(item => <Link key={item.id} href={`/cabanas/${item.name}`}><a className={styles.card}><div className={styles.image}><Image src={`/img/${item.photo}`} alt={item.title} layout="fill" objectFit="cover" sizes="(max-width: 760px) 90vw, 45vw" /></div><div className={styles.caption}><h2>{item.name === 'externa' ? 'El exterior y el parque' : 'Puertas adentro'}</h2><Icon name="arrow" /></div><p>{item.desc}</p></a></Link>)}</div>
    <Link href="/#consulta"><a className="button">Consultar disponibilidad <Icon name="arrow" size={18} /></a></Link>
  </div>;
}

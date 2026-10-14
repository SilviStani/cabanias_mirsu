import Head from 'next/head';
import Link from 'next/link';
import { data } from '../../imagenes';
import Gallery from '../../Components/Gallery';
import Icon from '../../Components/Icon';
import styles from '../../styles/Product.module.css';

export default function Product({ cabain }) {
  const photos = cabain.images.filter(image => image.url).map((image, index) => ({ url: image.url, alt: `${cabain.title}: vista ${index + 1}`, label: cabain.title }));
  return <div className={`shell ${styles.page}`}>
    <Link href="/cabana"><a className="text-link">← Volver a la cabaña</a></Link>
    <Head><title>{`${cabain.title} | Cabañas Mirsú`}</title><meta name="description" content={cabain.desc} /></Head>
    <div className={styles.heading}><div><p className="eyebrow">MIRSÚ, EN DETALLE</p><h1>{cabain.title}</h1></div><Link href="/#consulta"><a className="button">Consultar estadía <Icon name="arrow" size={17} /></a></Link></div>
    <p className={styles.description}>{cabain.longdesc}</p>
    <Gallery photos={photos} compact />
  </div>;
}
export async function getStaticPaths() {
  return { paths: data.map(item => ({ params: { name: item.name } })), fallback: false };
}
export async function getStaticProps({ params }) {
  const cabain = data.find(item => item.name === params.name);
  return cabain ? { props: { cabain } } : { notFound: true };
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Cabains from '../Components/cabains'
import Ubicacion from '../Components/ubicacion'
import { data } from '../imagenes.js'
import Carrusel from '../Components/Carrusel'

export default function Home( ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cabañas Mirsu en VGB, Córdoba</title>
        <meta name="description" content="Las más lindas de la Villa <3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
         <Carrusel />
         <Ubicacion  />
         <Cabains />
    </div>
  )
}


/*export const getStaticProps = async () => {
  const images = data;
  return {
    props: { images }
  } 
}*/
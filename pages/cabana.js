import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { data } from "../imagenes"
import styles from '../styles/Cabana.module.css'

const cabana = () => {
  return (
    <div className={styles.container}>
      <div className={styles.services}>
        {
          data.map( i =>(
            <Link key={i.id} href={i.name} passHref>
              <div className={styles.service}>
              <div className={styles.desc}>{i.desc}</div>
                <span className={styles.cat}>{i.title}</span>
                <div className={styles.media}>
                  <Image 
                  src={`/img/${i.photo}`}
                   width="100%"
                   height="100%"
                   objectFit='cover'
                   layout='responsive'
                   alt=''
                   loading='lazy'
                  />
                </div>
              </div>
            </Link>
          ))
        }  
      </div>
    </div>
  )
}

export default cabana;

{/*export const getStaticProps = async () => {
  const images = imagenes;
  return {
    props: { images }
  } 
}*/}
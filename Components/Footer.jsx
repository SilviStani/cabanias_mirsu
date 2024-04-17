import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const ano = new Date();
  let fecha = ano.getFullYear();
  return (
      <footer className={styles.container}>
        <div className={styles.contacto}>
          <Link href="#ubicacion">
         <p className={styles.p} id={styles.link}>
          Av. El Mirador 526 <br />
         Villa General Belgrano <br />
         Córdoba
          </p> 
          </Link>
          <p className={styles.p}><a href='https://wa.me/+5493546457020' passHref target="blank" id={styles.whatsapp}>+5493546457020</a><br /><a href="mailTo:cabanasmirsuvgbcordoba@gmail.com" passHref id={styles.mail}>cabanasmirsuvgbcordoba@gmail.com</a></p>
        </div>
        <div className={styles.inicio} >
          <Link href="/">
            Cabañas Mirsú
          </Link>
        </div>
        <div><p className={styles.p}>© {fecha} - Cabañas Mirsú<br />
                Todos los Derechos Reservados</p></div>
        <div><p className={styles.p}>Desarrollado por: <br />
        <a href="https://silvina-portfolio.vercel.app/" target='blank'>
        <Image src="/img/contact_me.png" alt="SilviDev Logo" width={80} height={80} />
        </a>
        </p></div>
      </footer>
  )
}

export default Footer

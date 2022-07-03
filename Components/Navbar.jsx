import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <a href='https://wa.me/+5493546457020' passHref target="blank" className={styles.item}>
      <div className={styles.callButton}>
        <Image 
        src='/img/whatsapp.png' 
        alt=''
        height="50px"
        width="50px"
        objectFit='contain'
        />
      </div>
      <div className={styles.texts}>
        <div className={styles.text}>Consultas y</div>
        <div className={styles.text}>Mensajes</div>
      </div>
      </a>
      </div>
      <div className={styles.item} >
        <Link href="/">Cabañas Mirsú
        </Link>
        </div>
      <div className={styles.item}>
        <Link href="/cabana">Cabaña</Link>
        </div>
      <div className={styles.item}>
        <Link href="#ubicacion">Ubicación</Link>
        </div>
      <div className={styles.item}>
        <Link href="/turismo">Atracciones Turísticas</Link>
        </div>
    </div>
  )
}

export default Navbar
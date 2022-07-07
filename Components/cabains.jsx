import React from 'react'
import styles from '../styles/cabains.module.css'

const Cabains = ( ) => {
  return (
    <div className={styles.container}>
    <div className={styles.video}>
      <video 
      src="/img/corto.mp4"
      muted
      autoPlay
      loop
      className={styles.video2}
      />
      
      <p className={styles.texto}>Villa General Belgrano<br />Un lugar de encanto!</p>
    </div>
    {/*<div className={styles.videoCabaña}>
      <div className={styles.space} />
      <p className={styles.texto}>Somos el complemento<br />Perfecto</p>
      <video 
      src="/img/loopCabana.mp4"
      muted
      autoPlay
      loop
      className={styles.video2}
      />
  </div>*/}
    </div>
  )
}

export default Cabains
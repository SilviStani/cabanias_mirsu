import React from 'react'
import styles from '../styles/MobileView.module.css'

const Mobileview = () => {
return (
    <div className={styles.container}>
      <div className={styles.video}>
        <video 
        src="/img/loopCabana.mp4"
        muted
        autoPlay
        loop
        className={styles.video2}
        loading="lazy" 
        />
      </div>
    </div>
  )
}

export default Mobileview
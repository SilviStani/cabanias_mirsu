import React from 'react'
import styles from '../styles/ubicacion.module.css'
import Image from 'next/image'

const Ubicacion = ( ) => {
  return (
    <div className={styles.container} id="ubicacion">
        <iframe  className={styles.iframe}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1692.3788744171493!2d-64.54417218189243!3d-31.96746814372041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2b030c84f1df7%3A0x6eb3af4dd50b12db!2sAv.%20El%20Mirador%20526%2C%20X5194%20Villa%20Gral.%20Belgrano%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1656847663179!5m2!1ses!2sar"
            width="600" 
            height="450"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        <div className={styles.line}/>
        <div className={styles.resume}>
            <p className={styles.p}>
            Nuestra ubicacion en Villa General Belgrano Córdoba es: <br />Avenida El Mirador 526. Altura Ruta 5 Km 76,8. <br />
            Frente al complejo {"Altos de Belgrano"}, nace la calle Av El Mirador. <br />A 100 metros de la Ruta es el 526.  Alli está  nuestra cabaña. <br />
            Estamos a 10 cuadras del centro y a 15 de la terminal  de ómnibus.  
            </p>
        </div>
        <div className={styles.line}/>
        <div className={styles.rigth}>
          <Image 
          src="/img/mapa.png"
          alt=""
          height="40px"
          width="40px"
          />
          <h3 className={styles.h3}>Lugares de interes cercanos <br /><span className={styles.span}>  Selecciona un destino</span></h3>
          <ul>
            <li  className={styles.a}><a href="https://goo.gl/maps/j1MpszmKRGHVAySL7" target="blank" >Paseo Pozo Verde</a></li>
            <li className={styles.a}><a href="https://goo.gl/maps/4Mo86ssuvWv6dcVSA" target="blank" >Sendero Pozo Verde</a></li>
            <li className={styles.a}><a href="https://goo.gl/maps/vQW3VdDubyUDTEx99" target="blank" >Restaurant Bierkeller</a></li>
            <li className={styles.a}><a href="https://goo.gl/maps/6AmiGqEUy51YXVSU7" target="blank" >Champaqui Golf Club</a></li>
            <li className={styles.a}><a href="https://goo.gl/maps/8nnKZNdNjbUb5YWX6" target="blank" >Hebras casa de Té</a></li>
            <li className={styles.a}><a href="https://goo.gl/maps/1koGLhUCArkcgivd7" target="blank" >Bosque Encantado Don Otto</a></li>
            <li className={styles.a}><a href="https://goo.gl/maps/4YfpX4ZAVSLMaLW9A" target="blank" >Paseo Los Arroyos</a></li>
          </ul>
          <ul>
            <h3>Supermercado y Servicios varios</h3>
            <li className={styles.a}><a href="https://goo.gl/maps/S53Ks5zp9HNPnYdL9" target="blank" >Supermercado Becerra</a></li>
            <li className={styles.a}><a href="https://goo.gl/maps/UrVbEN2y2TdJcfMv6" target="blank" >Farmacia Traful</a></li>
            <li className={styles.a}><a href="https://goo.gl/maps/cXTAHrEXuGSKQSX78" target="blank" >El Carozo Verduleria Fruteria</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Ubicacion
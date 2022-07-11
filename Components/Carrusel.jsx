import React, { useState } from 'react'
import styles from '../styles/Carrusel.module.css'
import Image from 'next/image'

const Carrusel = () => {
const [index, setIndex] = useState(0);

    const images = [
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
    ];
   
    
    const handleArrow = (direction) =>{
        if (direction === "l"){
            setIndex(index !== 0 ? index-1 : 3)
        }
        if (direction === "r"){
            setIndex(index !== 3 ? index+1 : 0);
        }
    }
    
    handleArrow();
  return (
    <div className={styles.container}>
    <div className={styles.arrowContainer}>
        <Image src="/img/arrowl.png" alt ="" objectFit='contain' layout='fill' onClick={()=>handleArrow("l")} style={{left:0}}/>
    </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        { images.map( (img, i) => (
            <div className={styles.imgContainer} key={i}>
                    <Image
                    src={img}
                    alt=""
                    layout='fill'
                    objectFit='contain'
                    loading='lazy'
                    />
            </div>
             ))
            }
        </div>
        <div className={styles.arrowContainer} style={{right:0}}>
        <Image src="/img/arrowr.png" alt ="" objectFit='contain' layout='fill' onClick={()=>handleArrow("r")}/>
        </div>
    </div>
  )
}

export default Carrusel;
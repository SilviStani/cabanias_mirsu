import React from 'react'
import styles from '../../styles/Product.module.css'
import { data } from '../../imagenes'
import Image from 'next/image'

const Product = ( { cabain } ) => {
  return (
    <div className={styles.container}>
        <div className={styles.cardL}>
            {
                cabain.images.map( img => (
                <div key={img.id} className={styles.imgContainer}>
                    <Image 
                    src={`/img/${img.url}`}
                    alt=""
                    height="100%"
                    width="100%"
                    objectFit="cover"
                    layout='responsive'
                    loading="lazy" 
                    className={styles.photo}
                    />
                </div>
            ))
        }
        </div>
        <div className={styles.cardS}>
            <h1 className={styles.title}>{cabain.title}</h1>
            <p className={styles.desc}>{cabain.longdesc}</p>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const products = data;
    const paths = products.map( (i)=> {
        return{
            params: {name: i.name},
        };
    });
    return{
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (ctx) => {
    const name = ctx.params.name;
    const cabain = data.filter((item) => item.name === name)[0];
    return{
        props: { cabain },
    };
};

export default Product;
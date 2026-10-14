import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';
import styles from '../styles/Gallery.module.css';

export const featuredPhotos = [
  { url: '3.jpg', alt: 'Cabaña Mirsú con galería cubierta, hamaca y jardín arbolado', label: 'El lugar' },
  { url: 'interior.jpg', alt: 'Interior de la cabaña Mirsú', label: 'Puertas adentro' },
  { url: 'matrimonial.jpg', alt: 'Dormitorio matrimonial de la cabaña', label: 'Para descansar' },
  { url: 'parr_garage.jpg', alt: 'Sector de parrilla y cochera cubierta', label: 'Al aire libre' },
];

export default function Gallery({ photos = featuredPhotos, compact = false }) {
  const [selected, setSelected] = useState(0);
  const dialog = useRef(null);
  const previousOverflow = useRef('');
  useEffect(() => () => { document.body.style.overflow = previousOverflow.current; }, []);
  function open(index) {
    setSelected(index);
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current.showModal();
  }
  function close() {
    dialog.current.close();
    document.body.style.overflow = previousOverflow.current;
  }
  function move(step) { setSelected(value => (value + step + photos.length) % photos.length); }
  return <>
    <div className={`${styles.grid} ${compact ? styles.compact : ''}`}>
      {photos.map((photo, index) => <button key={photo.url} type="button" className={styles.tile} onClick={() => open(index)} aria-label={`Ampliar foto: ${photo.alt}`}>
        <Image src={`/img/${photo.url}`} alt={photo.alt} layout="fill" objectFit="cover" sizes={compact ? '(max-width: 600px) 90vw, 45vw' : '(max-width: 600px) 90vw, 33vw'} />
        <span className={styles.caption}>{photo.label || `Foto ${index + 1}`}<Icon name="expand" size={17} /></span>
      </button>)}
    </div>
    <dialog ref={dialog} className={styles.dialog} aria-label="Galería de fotos de la cabaña" onCancel={event => { event.preventDefault(); close(); }} onClick={event => { if (event.target === event.currentTarget) close(); }} onKeyDown={event => { if (event.key === 'ArrowRight') { event.preventDefault(); move(1); } if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } }}>
      <div className={styles.viewer}>
        <div className={styles.toolbar}><span aria-live="polite">{selected + 1} / {photos.length} · {photos[selected].label || 'La cabaña'}</span><button type="button" onClick={close} aria-label="Cerrar galería" autoFocus><Icon name="close" /></button></div>
        <div className={styles.fullImage}><Image src={`/img/${photos[selected].url}`} alt={photos[selected].alt} layout="fill" objectFit="contain" sizes="95vw" /></div>
        <div className={styles.controls}><button type="button" onClick={() => move(-1)} aria-label="Foto anterior">← Anterior</button><p>{photos[selected].alt}</p><button type="button" onClick={() => move(1)} aria-label="Foto siguiente">Siguiente →</button></div>
      </div>
    </dialog>
  </>;
}

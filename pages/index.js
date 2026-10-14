import Seo from '../Components/Seo';
import { homeTitle, homeDescription, lodgingSchema } from '../lib/seo';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../Components/Icon';
import Gallery from '../Components/Gallery';
import Enquiry from '../Components/Enquiry';
import styles from '../styles/Home.module.css';

const amenities = [
  ['kitchen', 'Cocina equipada', 'Heladera, microondas, pava eléctrica y vajilla.'],
  ['grill', 'Quincho con asador', 'Un espacio para compartir alrededor de la mesa.'],
  ['wifi', 'WiFi y TV por cable', 'Conexión y entretenimiento durante tu estadía.'],
  ['car', 'Cochera cubierta', 'Un lugar para resguardar tu vehículo.'],
  ['sun', 'Comodidad todo el año', 'Calefacción y ventiladores. Aire en el dormitorio principal.'],
  ['tree', 'Parque arbolado', 'Espacio al aire libre para disfrutar del entorno.'],
];
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Av.+El+Mirador+526+Villa+General+Belgrano+Cordoba';

export default function Home() {
  return <>
    <Seo title={homeTitle} description={homeDescription} structuredData={lodgingSchema} />
    <section className={`shell ${styles.hero}`} aria-labelledby="hero-title">
      <div className={styles.heroCopy}>
        <p className={`eyebrow ${styles.location}`}><span />VILLA GENERAL BELGRANO · CÓRDOBA</p>
        <h1 id="hero-title">Cabañas en<br />Villa General<br /><em>Belgrano.</em></h1>
        <p className={styles.intro}>Un lugar para bajar el ritmo en Córdoba.<br />Cabaña para 2 a 6 personas, entre árboles y aire fresco.</p>
        <div className={styles.actions}><a className="button" href="#consulta">Consultar disponibilidad <Icon name="arrow" size={17} /></a><a className="text-link" href="#cabana">Conocé la cabaña <span aria-hidden="true">↓</span></a></div>
        <div className={styles.heroNote}><Icon name="tree" size={22} /><span>Unos días de descanso.<br /><strong>Muchos momentos para recordar.</strong></span></div>
      </div>
      <div className={styles.heroPhoto}><Image src="/img/3.jpg" alt="Cabaña Mirsú con galería cubierta, hamaca y jardín arbolado" layout="fill" objectFit="cover" objectPosition="60% center" priority sizes="(max-width: 760px) 100vw, 57vw" /><div className={styles.photoTag}><Icon name="pin" size={17} />Tu rincón en las sierras</div><span className={styles.photoIndex}>ESTÁS EN MIRSÚ · 01</span></div>
    </section>
    <div className={`shell ${styles.facts}`} aria-label="La cabaña de un vistazo">
      <div><Icon name="people" /><span>De 2 a 6 personas<small>Una escapada para compartir</small></span></div>
      <div><Icon name="bed" /><span>2 dormitorios<small>Espacio para descansar</small></span></div>
      <div><Icon name="tree" /><span>Parque y naturaleza<small>Disfrutá al aire libre</small></span></div>
      <div><Icon name="pin" /><span>Villa General Belgrano<small>En el corazón de Córdoba</small></span></div>
    </div>
    <section id="cabana" className={`shell ${styles.about}`} aria-labelledby="about-title">
      <div className={styles.aboutPhoto}><Image src="/img/interior2.jpg" alt="Ambiente interior de la cabaña, con sus muebles de madera" layout="fill" objectFit="cover" sizes="(max-width: 760px) 90vw, 40vw" /><span className={styles.photoLabel}>SENTITE COMO EN CASA</span></div>
      <div className={styles.aboutCopy}><p className="eyebrow">LA CABAÑA</p><h2 id="about-title">Tu cabaña para<br />2 a 6 personas.</h2><p>Un desayuno sin apuro, un asado compartido, una tarde en el parque. Mirsú te invita a disfrutar de esos pequeños planes que hacen bien.</p><p>Nuestra cabaña tiene dos dormitorios y espacio para 2 a 6 personas. Está equipada para que puedas cocinar, descansar y disfrutar de Villa General Belgrano a tu manera.</p><a href="#galeria" className="text-link">Recorré los espacios <Icon name="arrow" size={17} /></a></div>
    </section>
    <section className={styles.amenities} aria-labelledby="amenities-title"><div className="shell">
      <div className={styles.sectionHeading}><div><p className="eyebrow">LOS DETALLES QUE SUMAN</p><h2 id="amenities-title">Todo para estar a gusto.</h2></div><p>Vos traé las ganas de descansar.<br />Acá tenés lo que necesitás para tu estadía.</p></div>
      <div className={styles.amenityGrid}>{amenities.map(([icon, title, text]) => <div key={title} className={styles.amenity}><Icon name={icon} size={28} /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
    </div></section>
    <section id="galeria" className={`shell ${styles.gallery}`} aria-labelledby="gallery-title"><div className={styles.sectionHeading}><div><p className="eyebrow">CONOCÉ TU PRÓXIMO DESTINO</p><h2 id="gallery-title">Un vistazo a Mirsú.</h2></div><p>Puertas adentro y al aire libre.<br />Tocá una foto para verla en detalle.</p></div><Gallery /><div className={styles.galleryLink}><Link href="/cabana"><a className="button">Ver todas las fotos <Icon name="arrow" size={17} /></a></Link></div></section>
    <section id="ubicacion" className={`shell ${styles.locationSection}`} aria-labelledby="location-title">
      <div><p className="eyebrow">CERCA DE TODO, A TU RITMO</p><h2 id="location-title">Nos vemos<br />en la Villa.</h2><p>Nos encontrás en <strong>Av. El Mirador 526</strong>, Villa General Belgrano, Córdoba. A 100 metros de la Ruta 5, a la altura del km 76,8.</p><p>Estamos a 10 cuadras del centro y a 15 de la terminal de ómnibus.</p><a href={mapUrl} target="_blank" rel="noreferrer" className="button secondary">Cómo llegar <Icon name="arrow" size={17} /></a><div className={styles.nearby}><span className="eyebrow">PARA SALIR A PASEAR</span><a href="https://goo.gl/maps/j1MpszmKRGHVAySL7" target="_blank" rel="noreferrer">Paseo Pozo Verde <span aria-hidden="true">↗</span></a><a href="https://goo.gl/maps/4YfpX4ZAVSLMaLW9A" target="_blank" rel="noreferrer">Paseo Los Arroyos <span aria-hidden="true">↗</span></a><a href="https://www.google.com/maps/search/?api=1&query=La+Cumbrecita+Cordoba+Argentina" target="_blank" rel="noreferrer">La Cumbrecita <span aria-hidden="true">↗</span></a></div></div>
      <div className={styles.map}><iframe title="Ubicación de Cabañas Mirsú en Villa General Belgrano" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1692.3788744171493!2d-64.54417218189243!3d-31.96746814372041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2b030c84f1df7%3A0x6eb3af4dd50b12db!2sAv.%20El%20Mirador%20526%2C%20X5194%20Villa%20Gral.%20Belgrano%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1656847663179!5m2!1ses!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><div><Icon name="pin" size={19} /><span>Av. El Mirador 526<small>Villa General Belgrano · Córdoba</small></span><a href={mapUrl} target="_blank" rel="noreferrer" aria-label="Abrir ubicación en Google Maps"><Icon name="arrow" /></a></div></div>
    </section>
    <div className={`shell ${styles.enquiry}`}><Enquiry /></div>
    <section className={`shell ${styles.faq}`} aria-labelledby="faq-title"><div><p className="eyebrow">ANTES DE ARMAR EL BOLSO</p><h2 id="faq-title">Algunas respuestas<br />para tu viaje.</h2></div><div>
      <details><summary>¿Cuántas personas pueden alojarse?</summary><p>La cabaña tiene capacidad de 2 a 6 personas y cuenta con dos dormitorios.</p></details>
      <details><summary>¿Tiene cocina y lugar para hacer un asado?</summary><p>Sí. Hay cocina, heladera, microondas, pava eléctrica y vajilla. También podés disfrutar del quincho con asador.</p></details>
      <details><summary>¿Cómo consulto disponibilidad y tarifas?</summary><p>Elegí tus fechas y la cantidad de huéspedes en el formulario. Se abrirá WhatsApp con un mensaje listo para enviar. La disponibilidad, tarifa y condiciones se confirman directamente con el alojamiento.</p></details>
      <details><summary>¿Dónde consulto horarios y otras condiciones?</summary><p>Escribinos por WhatsApp para conocer los horarios de ingreso y salida, las condiciones de reserva o consultar por mascotas antes de organizar tu viaje.</p></details>
    </div></section>
  </>;
}

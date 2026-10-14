import { useEffect, useState } from 'react';
import Icon from './Icon';
import styles from '../styles/Enquiry.module.css';

function localDate(date) {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
}
function followingDay(value) {
  const [year, month, day] = value.split('-').map(Number);
  return localDate(new Date(year, month - 1, day + 1));
}
function displayDate(value) {
  return value.split('-').reverse().join('/');
}

export default function Enquiry() {
  const [today, setToday] = useState('');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [guests, setGuests] = useState('2');
  const [error, setError] = useState('');
  useEffect(() => { setToday(localDate(new Date())); }, []);
  function submit(event) {
    event.preventDefault();
    const currentDay = localDate(new Date());
    if (!arrival || arrival < currentDay || departure <= arrival) {
      setError('Revisá las fechas: la llegada debe ser hoy o después y la salida posterior a la llegada.');
      return;
    }
    setError('');
    const message = `¡Hola, Mirsú! Quisiera consultar disponibilidad y tarifa para ${guests} personas, del ${displayDate(arrival)} al ${displayDate(departure)}. ¡Gracias!`;
    window.open(`https://wa.me/5493546457020?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }
  return <section id="consulta" className={styles.section} aria-labelledby="enquiry-title">
    <div className={styles.heading}><span className="eyebrow">TU ESCAPADA EMPIEZA ACÁ</span><h2 id="enquiry-title">¿Cuándo te gustaría venir?</h2><p>Contanos tus planes. Te respondemos personalmente por WhatsApp.</p></div>
    <form onSubmit={submit} className={styles.form} aria-describedby="enquiry-note">
      <div className={styles.fields}>
        <label htmlFor="arrival">Llegada<input id="arrival" name="arrival" type="date" min={today} required value={arrival} onChange={event => { setArrival(event.target.value); if (departure <= event.target.value) setDeparture(''); setError(''); }} /></label>
        <label htmlFor="departure">Salida<input id="departure" name="departure" type="date" min={arrival ? followingDay(arrival) : today} required value={departure} onChange={event => { setDeparture(event.target.value); setError(''); }} /></label>
        <label htmlFor="guests">Huéspedes<select id="guests" name="guests" value={guests} onChange={event => setGuests(event.target.value)}>{[2, 3, 4, 5, 6].map(value => <option key={value} value={value}>{value} personas</option>)}</select></label>
        <button className="button" type="submit"><Icon name="chat" size={20} />Consultar por WhatsApp</button>
      </div>
      <p id="enquiry-note" className={styles.note}>Se abrirá WhatsApp con tu consulta. Disponibilidad y tarifa a confirmar; este formulario no realiza una reserva.</p>
      {error && <p role="alert" className={styles.error}>{error}</p>}
    </form>
    <a className={`button ${styles.direct}`} href="https://wa.me/5493546457020?text=Hola%2C%20quisiera%20hacer%20una%20consulta%20sobre%20la%20caba%C3%B1a." target="_blank" rel="noreferrer"><Icon name="chat" size={22} /><span>¿Todavía no tenés fecha? Escribinos igual</span><span aria-hidden="true">↗</span></a>
  </section>;
}

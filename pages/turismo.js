export default function Turismo() { return null; }

export function getServerSideProps() {
  return { redirect: { destination: '/#ubicacion', permanent: true } };
}

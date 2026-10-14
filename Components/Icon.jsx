export default function Icon({ name, size = 22, ...props }) {
  const paths = {
    arrow: <path d="M4 12h16M14 6l6 6-6 6" />,
    pin: <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    home: <path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8" />,
    bed: <><path d="M3 18V7m18 11V9M3 14h18M3 18v3m18-3v3M3 9h18v9H3" /><path d="M6 9V6h5v3m2 0V6h5v3" /></>,
    tree: <path d="m12 2-6 8h3l-5 7h16l-5-7h3L12 2Zm0 15v5" />,
    wifi: <><path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0" /><circle cx="12" cy="20" r=".7" /></>,
    car: <path d="m5 6-2 7v6h18v-6l-2-7H5Zm-2 7h18M5 19v3m14-3v3M6 16h2m8 0h2" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
    kitchen: <path d="M5 3v7m3-7v7M3 3v5a4 4 0 0 0 8 0V3M7 12v10M20 3c-4 2-5 7-5 10h5m0-10v19" />,
    grill: <path d="M4 10h16a8 8 0 0 1-16 0Zm4 7-3 5m11-5 3 5M8 20h8M8 2c-3 2 3 3 0 5m8-5c-3 2 3 3 0 5" />,
    people: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3" /></>,
    chat: <><path d="M21 11.5a9 9 0 0 1-13 8L3 21l1.5-5A9 9 0 1 1 21 11.5Z" /><path d="M8 8c0 4 2 6 6 7l2-2-3-2-1 1-2-2 1-1-2-3-1 2Z" /></>,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    expand: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.home}</svg>;
}

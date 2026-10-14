// Keep this origin aligned with robots.txt and sitemap.xml when changing domains.
export const siteUrl = 'https://cabanasmirsu.vercel.app';
export const siteName = 'Cabañas Mirsú';
export const socialImage = `${siteUrl}/img/mirsu-compartir-v1.jpg`;
export const homeTitle = 'Cabañas en Villa General Belgrano, Córdoba | Mirsú';
export const homeDescription = 'Cabaña para 2 a 6 personas en Villa General Belgrano, Córdoba. Dos dormitorios, parque, quincho con asador y cochera cubierta. Consultá disponibilidad.';

export const lodgingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  '@id': `${siteUrl}/#alojamiento`,
  name: siteName,
  url: `${siteUrl}/`,
  description: homeDescription,
  image: [`${siteUrl}/img/3.jpg`, `${siteUrl}/img/interior2.jpg`, `${siteUrl}/img/matrimonial.jpg`],
  logo: `${siteUrl}/img/logoMirsu.png`,
  telephone: '+54 9 3546 457020',
  email: 'cabanasmirsuvgbcordoba@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. El Mirador 526',
    addressLocality: 'Villa General Belgrano',
    addressRegion: 'Córdoba',
    addressCountry: 'AR',
  },
  amenityFeature: ['Cocina equipada', 'Quincho con asador', 'WiFi', 'TV por cable', 'Cochera cubierta', 'Parque arbolado'].map(name => ({
    '@type': 'LocationFeatureSpecification', name, value: true,
  })),
};

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, path }, index) => ({
      '@type': 'ListItem', position: index + 1, name, item: `${siteUrl}${path}`,
    })),
  };
}

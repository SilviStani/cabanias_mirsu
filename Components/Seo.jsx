import Head from 'next/head';
import { siteUrl, siteName, socialImage } from '../lib/seo';

export default function Seo({ title, description, path = '/', structuredData }) {
  const canonical = `${siteUrl}${path}`;
  const imageAlt = 'Cabañas Mirsú: cabaña y parque en Villa General Belgrano, Córdoba. De 2 a 6 personas.';

  return <Head>
    <title>{title}</title>
    <meta name="description" content={description} key="description" />
    <meta name="robots" content="index, follow, max-image-preview:large" key="robots" />
    <link rel="canonical" href={canonical} key="canonical" />
    <meta property="og:type" content="website" key="og:type" />
    <meta property="og:locale" content="es_AR" key="og:locale" />
    <meta property="og:site_name" content={siteName} key="og:site_name" />
    <meta property="og:url" content={canonical} key="og:url" />
    <meta property="og:title" content={title} key="og:title" />
    <meta property="og:description" content={description} key="og:description" />
    <meta property="og:image" content={socialImage} key="og:image" />
    <meta property="og:image:secure_url" content={socialImage} key="og:image:secure_url" />
    <meta property="og:image:type" content="image/jpeg" key="og:image:type" />
    <meta property="og:image:width" content="1200" key="og:image:width" />
    <meta property="og:image:height" content="630" key="og:image:height" />
    <meta property="og:image:alt" content={imageAlt} key="og:image:alt" />
    <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
    <meta name="twitter:title" content={title} key="twitter:title" />
    <meta name="twitter:description" content={description} key="twitter:description" />
    <meta name="twitter:image" content={socialImage} key="twitter:image" />
    <meta name="twitter:image:alt" content={imageAlt} key="twitter:image:alt" />
    {structuredData && <script key="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />}
  </Head>;
}

import '../styles/globals.css'
import Layout from '../Components/Layout.js'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/img/logoMirsu.png" />
      <meta name="theme-color" content="#294c3b" />
    </Head>
    <Component {...pageProps} />
  </Layout>)
}

export default MyApp

import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} >
    <Head>
      <script src="https://kit.fontawesome.com/87121b56c7.js" crossorigin="anonymous"></script>
    </Head>
  </Component>
}

export default MyApp

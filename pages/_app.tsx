import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../Components/Layout'
import HeaderComp from '../Components/HeaderComp'


function MyApp({ Component, pageProps }: AppProps) {
  return(<Layout><Component {...pageProps} /></Layout>
     )
}

export default MyApp

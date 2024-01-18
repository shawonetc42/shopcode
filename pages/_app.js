import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css'
import Script from 'next/script';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Script src="https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID" />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
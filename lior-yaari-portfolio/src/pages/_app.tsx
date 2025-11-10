import { AppProps } from 'next/app';
import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Add any global scripts or styles here if needed
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
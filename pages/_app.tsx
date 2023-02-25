import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { wrapper } from '../context/store';
import { showSidebar, sidebar } from '../context/theme';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const navbar = useSelector(sidebar);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  console.log(scrollPosition);
  useEffect(() => {
    const width = window.innerHeight;
    if (width >= 900) () => dispatch(showSidebar());
    console.log(width);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Interio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);

import Hero from '../components/hero';
import About from '../components/about';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head><title>Tiffany K. Nguyen</title></Head>
      <Hero/>
      <About />
    </>
  )
}

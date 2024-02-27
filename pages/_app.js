import { ChakraProvider } from '@chakra-ui/react'
import Hero from '../components/hero'
import Nav from '../components/nav'
import theme from '../theme'
import About from '../components/about'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Hero />
      <About />
    </ChakraProvider>
  )
}

export default MyApp

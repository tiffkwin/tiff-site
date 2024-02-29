import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import Nav from '../components/nav'
import Hero from '../components/hero'
import About from '../components/about'
import Tamagotchi from '../components/tamagotchi'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Hero />
      <About />
      <Tamagotchi />
    </ChakraProvider>
  )
}

export default MyApp

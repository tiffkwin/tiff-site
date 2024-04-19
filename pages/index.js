import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import Nav from '../components/nav'
import Hero from '../components/hero'
import About from '../components/about'
import Tamagotchi from '../components/tamagotchi'
// import Mastermind from '../components/mastermind'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Hero />
      <About />
      <Tamagotchi />
      {/* <Mastermind /> */}
    </ChakraProvider>
  )
}

export default MyApp

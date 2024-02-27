import { extendTheme } from '@chakra-ui/react'
import '@fontsource/paytone-one';
import '@fontsource/raleway';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    heading: `'Paytone One', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
}

const theme = extendTheme({ config })

export default theme
import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head >
        <link rel="preload" href="Mona-Sans.woff2" as="font" type="font/woff2" crossOrigin />
        </Head>
        <body style={{ backgroundColor: "white" }}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
/** @format */

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      m_plus2: "'M PLUS 2', sans-serif;",
    },
    colors: {
      poolBlue: '#7FA9D9',
      mashmallowMint: '#D0E9DD',
      coconatsPink: '#F2A2B6',
    },
  })
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

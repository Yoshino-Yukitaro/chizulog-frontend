import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { M_PLUS_2, Poiret_One, Reggae_One } from '@next/font/google'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      m_plus2: "'M PLUS 2', sans-serif;"
    },
    colors: {
      poolBlue: "#7FA9D9",
      mashmallowMint: "#D0E9DD",
      coconatsPink: "#F2A2B6"
    }
  })
  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

/** @format */

import { VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'
import Header from '../parts/commons/header/header'

interface Props {
  children: ReactNode
}
const CommonLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>サンプルタイトル</title>
        <meta name='description' content='サンプルです' />
      </Head>
      <VStack as='main'>
        <Header />
        {children}
      </VStack>
    </>
  )
}
export default CommonLayout

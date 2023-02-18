/** @format */

import { Flex, Spacer, VStack } from '@chakra-ui/react'
import SnapCamera from './snapCamera'

const MapWindowPanel = () => {
  return (
    <VStack h='100%' w='100%' padding={{ base: '1rem', md: '3rem' }}>
      <Spacer />
      <Flex flexDir='row-reverse' w='100%'>
        <SnapCamera />
      </Flex>
    </VStack>
  )
}
export default MapWindowPanel

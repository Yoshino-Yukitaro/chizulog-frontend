/** @format */

import { AddIcon } from '@chakra-ui/icons'
import { Button, HStack, IconButton, Spacer, VStack } from '@chakra-ui/react'
import { MouseEvent } from 'react'

const MapWindowPanel = () => {
  const getCoordinates = (e: MouseEvent<HTMLButtonElement>) => {
    navigator.geolocation.getCurrentPosition(location => console.log(location.coords.latitude))
  }

  return (
    <VStack h='100%' w='100%' padding='25px 55px'>
      <Spacer />
      <HStack w='100%'>
        <Spacer />
        <Button>編集する</Button>
        <IconButton aria-label='カメラで記録' onClick={getCoordinates} icon={<AddIcon />} />
      </HStack>
    </VStack>
  )
}
export default MapWindowPanel

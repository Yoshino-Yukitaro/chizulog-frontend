/** @format */

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  position,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { GoogleMap, Marker, MarkerF, useLoadScript } from '@react-google-maps/api'
import { DateTime } from 'luxon'
import { MouseEvent, MouseEventHandler, useCallback, useRef, useState } from 'react'

import CommonLayout from '@/components/layouts/commonLayout'
import LogCard from '@/components/parts/map/logCard'
import MemoryMarker from '@/components/parts/map/memoryMarker'

const mapContainerStyle = {
  height: '60vh',
  width: '100%',
}

const datetime = DateTime.now()

const UserMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
    language: 'ja',
  })
  const [coordinates, setCoordinates] = useState<GeolocationPosition>()
  const mapRef = useRef<google.maps.Map>()
  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map
  }, [])

  const getCoordinates = (e: MouseEvent<HTMLButtonElement>) => {
    navigator.geolocation.getCurrentPosition(setCoordinates)
  }

  if (loadError) return 'Error'
  if (!isLoaded) return 'Load中'
  return (
    <CommonLayout>
      <Text color='coconatsPink' fontSize='3xl' paddingY='15px'>
        地図のタイトル
      </Text>
      <GoogleMap
        id='map'
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={{
          lat: 43.048225,
          lng: 141.49701,
        }}
        onLoad={onMapLoad}
      >
        <MemoryMarker lat={43} lng={141} />
        <MemoryMarker
          lat={coordinates?.coords.latitude ? coordinates?.coords.latitude : 42}
          lng={coordinates?.coords.longitude ? coordinates?.coords.longitude : 142}
        />
        <VStack h='100%' w='100%' padding='25px 55px'>
          <Spacer />
          <HStack w='100%'>
            <Spacer />
            <Button>追加</Button>
            <Button onClick={getCoordinates}>スナップ</Button>
          </HStack>
        </VStack>
      </GoogleMap>
    </CommonLayout>
  )
}
export default UserMap

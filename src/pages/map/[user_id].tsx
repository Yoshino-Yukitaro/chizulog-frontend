/** @format */

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { GoogleMap, Marker, MarkerF, useLoadScript } from '@react-google-maps/api'
import { DateTime } from 'luxon'
import { useCallback, useRef } from 'react'

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
  const mapRef = useRef<google.maps.Map>()
  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map
  }, [])

  if (loadError) return 'Error'
  if (!isLoaded) return 'Load中'
  return (
    <CommonLayout>
      <Text color='coconatsPink'>サンプル</Text>
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
        <MemoryMarker lat={44} lng={142} />
      </GoogleMap>
    </CommonLayout>
  )
}
export default UserMap

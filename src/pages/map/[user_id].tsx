/** @format */

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { GoogleMap, Marker, MarkerF, useLoadScript } from '@react-google-maps/api'
import { useCallback, useRef } from 'react'

import CommonLayout from '@/components/layouts/commonLayout'

const mapContainerStyle = {
  height: '60vh',
  width: '100%',
}

const UserMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
    language: 'ja',
  })
  const mapRef = useRef<google.maps.Map>()
  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map
  }, [])

  const { isOpen, onOpen, onClose } = useDisclosure()

  const onLoad = (marker: google.maps.Marker) => {
    console.log('marker: ', marker)
  }

  const onClick = (e: google.maps.MapMouseEvent) => {
    alert('クリックされた')
  }

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
        <>
          <MarkerF
            position={{
              lat: 43,
              lng: 141,
            }}
            onLoad={onLoad}
            onClick={onOpen}
          />
          <Modal
            isCentered
            isOpen={isOpen}
            onClose={onClose}
            scrollBehavior='inside'
            size={{ base: 'xs', md: 'xl', lg: '2xl' }}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
                <p>あ</p>
              </ModalBody>
              <ModalFooter>
                <Button>追加</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      </GoogleMap>
    </CommonLayout>
  )
}
export default UserMap

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
                <VStack marginTop='50px'>
                  <Card w={{ base: '98%', md: '90%' }} direction='row'>
                    <Image
                      objectFit='cover'
                      boxSize={{ base: '100px', md: '150px' }}
                      src=''
                      fallbackSrc='https://via.placeholder.com/150'
                      alt='Caffe Latte'
                    />
                    <VStack alignItems='start'>
                      <CardBody padding={{ base: '8px' }}>
                        <Text as='h2' fontSize={{ base: 'xl', md: '2xl' }}>
                          タイトル
                        </Text>
                      </CardBody>
                      <CardFooter padding={{ base: '8px' }}>
                        <Text>2023年2月2日</Text>
                      </CardFooter>
                    </VStack>
                  </Card>
                  <Card w={{ base: '98%', md: '90%' }} direction='row'>
                    <Image
                      objectFit='cover'
                      boxSize={{ base: '100px', md: '150px' }}
                      src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                      alt='Caffe Latte'
                    />
                    <VStack alignItems='start'>
                      <CardBody padding={{ base: '8px' }}>
                        <Text as='h2' fontSize={{ base: 'xl', md: '2xl' }}>
                          タイトル
                        </Text>
                      </CardBody>
                      <CardFooter padding={{ base: '8px' }}>
                        <Text>2023年2月2日</Text>
                      </CardFooter>
                    </VStack>
                  </Card>
                  <Card w={{ base: '98%', md: '90%' }} direction='row'>
                    <Image
                      objectFit='cover'
                      maxW={{ base: '100px', md: '200px' }}
                      src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                      alt='Caffe Latte'
                    />
                    <VStack alignItems='start'>
                      <CardBody padding={{ base: '8px' }}>
                        <Text as='h2' fontSize={{ base: 'xl', md: '2xl' }}>
                          タイトル
                        </Text>
                      </CardBody>
                      <CardFooter padding={{ base: '8px' }}>
                        <Text>2023年2月2日</Text>
                      </CardFooter>
                    </VStack>
                  </Card>
                  <Card w={{ base: '98%', md: '90%' }} direction='row'>
                    <Image
                      objectFit='cover'
                      maxW={{ base: '100px', md: '200px' }}
                      src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                      alt='Caffe Latte'
                    />
                    <VStack alignItems='start'>
                      <CardBody padding={{ base: '8px' }}>
                        <Text as='h2' fontSize={{ base: 'xl', md: '2xl' }}>
                          タイトル
                        </Text>
                      </CardBody>
                      <CardFooter padding={{ base: '8px' }}>
                        <Text>2023年2月2日</Text>
                      </CardFooter>
                    </VStack>
                  </Card>
                  <Card w={{ base: '98%', md: '90%' }} direction='row'>
                    <Image
                      objectFit='cover'
                      maxW={{ base: '100px', md: '200px' }}
                      src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                      alt='Caffe Latte'
                    />
                    <VStack alignItems='start'>
                      <CardBody padding={{ base: '8px' }}>
                        <Text as='h2' fontSize={{ base: 'xl', md: '2xl' }}>
                          タイトル
                        </Text>
                      </CardBody>
                      <CardFooter padding={{ base: '8px' }}>
                        <Text>2023年2月2日</Text>
                      </CardFooter>
                    </VStack>
                  </Card>
                </VStack>
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

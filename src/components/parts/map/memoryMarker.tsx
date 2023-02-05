/** @format */

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { MarkerF } from '@react-google-maps/api'
import { DateTime } from 'luxon'
import LogCard from './logCard'

const datetime = DateTime.now()

interface Props {
  lat: number
  lng: number
}

const MemoryMarker = ({ lat, lng }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <MarkerF
        position={{
          lat: lat,
          lng: lng,
        }}
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
              <LogCard title='タイトル' contentUrl='' datetime={datetime} />
              <LogCard
                title='タイトル'
                contentUrl=''
                imageUrl='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                datetime={datetime}
              />
              <LogCard
                title='タイトル'
                contentUrl=''
                imageUrl='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                datetime={datetime}
              />
              <LogCard
                title='タイトル'
                contentUrl=''
                imageUrl='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                datetime={datetime}
              />
              <LogCard
                title='タイトル'
                contentUrl=''
                imageUrl='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                datetime={datetime}
              />
              <LogCard
                title='タイトル'
                contentUrl=''
                imageUrl='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                datetime={datetime}
              />
              <LogCard
                title='タイトル'
                contentUrl=''
                imageUrl='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                datetime={datetime}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button>追加</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default MemoryMarker

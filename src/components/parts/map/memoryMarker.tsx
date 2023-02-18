/** @format */

import { LocalMemoryLogRepository } from '@/libs/repository/localMemoryLogRepository'
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
import { useLiveQuery } from 'dexie-react-hooks'
import { DateTime } from 'luxon'
import LogCard from './logCard'

interface Props {
  id: number
  lat: number
  lng: number
}

const MemoryMarker = ({ id, lat, lng }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const localMemoryLogRepository = LocalMemoryLogRepository.getRepository()
  const memoryLogs = useLiveQuery(() => localMemoryLogRepository.findAllByMemoryMarkerId(id))
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
              {memoryLogs?.map(log => (
                <LogCard
                  key={log.id}
                  title={log.title}
                  contentUrl=''
                  imageUrl={log.image_url}
                  datetime={DateTime.fromJSDate(log.created_at)}
                />
              ))}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button>削除</Button>
            <Button>追加</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default MemoryMarker

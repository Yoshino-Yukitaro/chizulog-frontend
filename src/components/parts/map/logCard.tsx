/** @format */

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Card,
  CardBody,
  CardFooter,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { DateTime } from 'luxon'
import { useRef } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'

interface Props {
  title: string
  datetime: DateTime
  contentUrl: string
  imageUrl?: string
}
const LogCard = ({ title, datetime, contentUrl, imageUrl }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const deleteRef = useRef<HTMLButtonElement>(null)
  return (
    <Card w={{ base: '98%', md: '90%' }} direction='row' _hover={{ bgColor: 'blackAlpha.100' }}>
      <Image
        objectFit='cover'
        boxSize={{ base: '100px', md: '150px' }}
        src={imageUrl}
        fallbackSrc='https://via.placeholder.com/150'
        alt={title}
      />
      <VStack alignItems='start' w='100%'>
        <CardBody padding={{ base: '8px' }}>
          <Text as='h2' fontSize={{ base: 'xl', md: '2xl' }}>
            {title}
          </Text>
        </CardBody>
        <CardFooter padding={{ base: '8px' }} w='100%'>
          <Text>{datetime.toLocaleString(DateTime.DATE_FULL)}</Text>
          <Spacer />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='メニュー'
              bgColor='inherit'
              _hover={{ bgColor: 'coconatsPink' }}
              icon={<Icon as={BiDotsVerticalRounded} />}
              borderRadius='50%'
              size={{ base: 'sm', md: 'md' }}
            />
            <MenuList>
              <MenuItem>編集</MenuItem>
              <MenuItem onClick={onOpen}>削除</MenuItem>
            </MenuList>
          </Menu>
          <AlertDialog isOpen={isOpen} leastDestructiveRef={deleteRef} onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                  思い出を削除する
                </AlertDialogHeader>

                <AlertDialogBody>
                  1度削除した思い出は戻ってきません。それでも削除しますか？
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={deleteRef} onClick={onClose}>
                    戻る
                  </Button>
                  <Button colorScheme='red' onClick={onClose} ml={3}>
                    削除
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </CardFooter>
      </VStack>
    </Card>
  )
}
export default LogCard

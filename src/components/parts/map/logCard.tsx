/** @format */

import { Button, Card, CardBody, CardFooter, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import { DateTime } from 'luxon'

interface Props {
  title: string
  datetime: DateTime
  contentUrl: string
  imageUrl?: string
}
const LogCard = ({ title, datetime, contentUrl, imageUrl }: Props) => {
  return (
    <Card w={{ base: '98%', md: '90%' }} direction='row' _hover={{ opacity: '50%' }}>
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
          <Button _hover={{ bgColor: 'coconatsPink' }}>:</Button>
        </CardFooter>
      </VStack>
    </Card>
  )
}
export default LogCard

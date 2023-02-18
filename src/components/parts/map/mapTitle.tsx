/** @format */

import { Text } from '@chakra-ui/react'

interface Props {
  title: string
}
const MapTitle = ({ title }: Props) => {
  return (
    <Text color='coconatsPink' fontSize='3xl' paddingY='15px'>
      {title}
    </Text>
  )
}
export default MapTitle

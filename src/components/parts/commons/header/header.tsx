/** @format */

import { HStack, Spacer } from '@chakra-ui/react'
import FunctionalButton from './functionalButton'
import Logo from './logo'

const Header = () => {
  return (
    <HStack bgColor='poolBlue' w='100vw' h='50px' padding='30px 20px'>
      <Logo />
      <Spacer />
      <FunctionalButton />
    </HStack>
  )
}
export default Header

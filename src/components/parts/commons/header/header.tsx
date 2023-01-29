import { Avatar, HStack, Spacer, Text } from "@chakra-ui/react"
import { useState } from "react"

const Header = () => {
    const [isLogin, setInsLogin] = useState(false);
    return (
        <HStack bgColor="blue.300" w="100vw" h="50px" padding="30px 20px">
            <Text fontSize="3xl" fontWeight="bold">ちずろぐ</Text>
            <Spacer />
            <Avatar />
        </HStack>
    )
}
export default Header
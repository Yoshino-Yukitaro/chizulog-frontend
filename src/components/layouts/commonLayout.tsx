import { VStack } from "@chakra-ui/react"
import { ReactNode } from "react"
import Header from "../parts/commons/header/header"

interface Props {
    children : ReactNode
}
const CommonLayout = ({ children }: Props) => {
    return (
        <VStack>
            <Header />
            {children}
        </VStack>
    )
}
export default CommonLayout
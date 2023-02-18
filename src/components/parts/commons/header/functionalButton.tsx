/** @format */

import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useState } from 'react'

const FunctionalButton = () => {
  const [isLogin, setIsLogin] = useState(false)
  const logout = () => {
    setIsLogin(false)
  }
  const login = () => {
    setIsLogin(true)
  }
  if (!isLogin) return <Button onClick={login}>ログイン</Button>
  return (
    <Menu>
      <MenuButton>
        <Avatar />
      </MenuButton>
      <MenuList>
        <MenuItem>設定</MenuItem>
        <MenuItem onClick={logout}>ログアウト</MenuItem>
      </MenuList>
    </Menu>
  )
}
export default FunctionalButton

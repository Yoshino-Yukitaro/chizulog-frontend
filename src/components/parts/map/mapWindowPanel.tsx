/** @format */

import { CameraType } from '@/types/camera'
import { AddIcon } from '@chakra-ui/icons'
import { Button, HStack, IconButton, Spacer, VStack } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import { MouseEvent, useRef, useState } from 'react'
import { Camera } from 'react-camera-pro'

const cameraErrorMsg = {
  noCameraAccessible:
    'カメラデバイスにアクセスできません。カメラデバイスに接続するか、別のブラウザをご使用ください。',
  permissionDenied: 'カメラを使用する権限がありません。カメラを使用する権限を与えてください。',
  switchCamera: 'カメラを切り替えることができませんでした。',
  canvas: 'キャンバスがサポートされていません。',
}

interface Buf {
  lat: number
  lng: number
  title: string
  datetime: DateTime
  contentUrl: string
  imageUrl?: string
}

const MapWindowPanel = () => {
  const [image, setImage] = useState('')
  const [buf, setBuf] = useState<Buf[]>([])
  const [isCameraUp, setIsCameraUp] = useState(false)
  const createSnapshot = (e: MouseEvent<HTMLButtonElement>) => {
    const photoImage = cameraRef.current?.takePhoto()
    if (!photoImage) return
    navigator.geolocation.getCurrentPosition(location => console.log(location.coords.latitude))
    // 地位情報とかをセットする
    setImage(photoImage)
    setIsCameraUp(false)
  }
  const cameraRef = useRef<CameraType>(null)
  const cameraUp = () => {
    setIsCameraUp(true)
  }

  const SnapCamera = () => {
    if (!isCameraUp)
      return <IconButton aria-label='カメラで記録' onClick={cameraUp} icon={<AddIcon />} />
    return (
      <>
        <Camera facingMode='user' errorMessages={cameraErrorMsg} ref={cameraRef} />
        <IconButton aria-label='カメラで記録' onClick={createSnapshot} icon={<AddIcon />} />
      </>
    )
  }

  return (
    <VStack h='100%' w='100%' padding='25px 55px'>
      <Spacer />
      <HStack w='100%'>
        <Spacer />
        <Button>編集する</Button>
        <SnapCamera />
      </HStack>
    </VStack>
  )
}
export default MapWindowPanel

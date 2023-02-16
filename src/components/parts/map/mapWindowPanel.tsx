/** @format */

import { LocalMemoryLogRepository } from '@/libs/repository/localMemoryLogRepository'
import { LocalMemoryMarkerRepository } from '@/libs/repository/localMemoryMarkerRepository'
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
  const [isCameraUp, setIsCameraUp] = useState(false)
  const localMemoryMarkerRepository = LocalMemoryMarkerRepository.getRepository()
  const localMemoryLogRepository = LocalMemoryLogRepository.getRepository()
  const createSnapshot = (e: MouseEvent<HTMLButtonElement>) => {
    const postMarker = async (position: GeolocationPosition) => {
      try {
        const now = DateTime.now().toJSDate()
        const memoryMarker = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          created_at: now,
          updated_at: now,
        }
        const markerId = await localMemoryMarkerRepository.save(memoryMarker)
        console.log(`markerId=${markerId}`)

        const memoryLog = {
          memory_marker_id: markerId,
          title: '未設定',
          description: '',
          image_url: image,
          created_at: now,
          updated_at: now,
        }
        const logId = await localMemoryLogRepository.save(memoryLog)
        console.log(`logId=${logId}`)
      } catch (error) {
        throw Error('値の保存に失敗しました')
      }
    }

    const photoImage = cameraRef.current?.takePhoto()
    if (!photoImage) throw Error('画像の撮影に失敗しました。')
    setImage(photoImage)
    navigator.geolocation.getCurrentPosition(postMarker)
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

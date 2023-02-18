/** @format */

import { LocalMemoryLogRepository } from '@/libs/repository/localMemoryLogRepository'
import { LocalMemoryMarkerRepository } from '@/libs/repository/localMemoryMarkerRepository'
import { CameraType } from '@/types/camera'
import { AddIcon } from '@chakra-ui/icons'
import { CloseButton, Flex, Icon, IconButton, Spinner } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import { MouseEvent, useRef, useState } from 'react'
import { Camera } from 'react-camera-pro'
import { AiFillCamera } from 'react-icons/ai'

const cameraErrorMsg = {
  noCameraAccessible:
    'カメラデバイスにアクセスできません。カメラデバイスに接続するか、別のブラウザをご使用ください。',
  permissionDenied: 'カメラを使用する権限がありません。カメラを使用する権限を与えてください。',
  switchCamera: 'カメラを切り替えることができませんでした。',
  canvas: 'キャンバスがサポートされていません。',
}
const SnapCamera = () => {
  const [image, setImage] = useState('')
  const [isCameraUp, setIsCameraUp] = useState(false)
  const [isLoad, setIsLoad] = useState(false)
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
      } finally {
        setIsLoad(false)
        setIsCameraUp(false)
      }
    }
    setIsLoad(true)
    const photoImage = cameraRef.current?.takePhoto()
    if (!photoImage) throw Error('画像の撮影に失敗しました。')
    setImage(photoImage)
    navigator.geolocation.getCurrentPosition(postMarker)
  }
  const cameraRef = useRef<CameraType>(null)
  const cameraUp = () => {
    setIsCameraUp(true)
  }
  const cameraDown = () => {
    setIsCameraUp(false)
  }
  if (isLoad)
    return (
      <Flex
        w='100%'
        h='100%'
        position='absolute'
        bgColor='whiteAlpha.500'
        bottom='0'
        left='0'
        justifyContent='center'
        alignItems='center'
      >
        <Spinner padding='auto' size='xl' />
      </Flex>
    )
  if (!isCameraUp)
    return (
      <IconButton
        aria-label='カメラで記録'
        onClick={cameraUp}
        borderRadius='50%'
        border='1px'
        bgColor='white'
        color='coconatsPink'
        icon={<AddIcon />}
      />
    )
  return (
    <>
      <Camera facingMode='user' errorMessages={cameraErrorMsg} ref={cameraRef} />
      <IconButton
        aria-label='カメラで記録'
        onClick={createSnapshot}
        borderRadius='50%'
        border='1px'
        bgColor='white'
        color='coconatsPink'
        icon={<Icon as={AiFillCamera} />}
      />
      <CloseButton
        onClick={cameraDown}
        position='absolute'
        top='1rem'
        bgColor='white'
        borderRadius='50%'
        color='coconatsPink'
      />
    </>
  )
}
export default SnapCamera

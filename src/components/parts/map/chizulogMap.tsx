/** @format */

import { LocalMemoryMarkerRepository } from '@/libs/repository/localMemoryMarkerRepository'
import { Spinner } from '@chakra-ui/react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import { useLiveQuery } from 'dexie-react-hooks'
import { useCallback, useEffect, useRef, useState } from 'react'
import MapWindowPanel from './mapWindowPanel'
import MemoryMarker from './memoryMarker'

const mapContainerStyle = {
  height: '60vh',
  width: '100%',
}
const mapOption: google.maps.MapOptions = {
  disableDefaultUI: true,
}
const ChizulogMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
    language: 'ja',
  })
  const mapRef = useRef<google.maps.Map>()
  const [position, setPosition] = useState<GeolocationPosition>()
  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map
  }, [])
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setPosition)
  }, [])
  const localMemoryMarkerRepository = LocalMemoryMarkerRepository.getRepository()
  const memoryMarkers = useLiveQuery(() => localMemoryMarkerRepository.findAll())
  if (loadError) return <p>読み込みに失敗しました。</p>
  if (!isLoaded) return <Spinner />
  return (
    <GoogleMap
      id='map'
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={{
        lat: position?.coords.latitude || 40,
        lng: position?.coords.longitude || 139,
      }}
      onLoad={onMapLoad}
      options={mapOption}
    >
      {memoryMarkers?.map(memoryMarker => (
        <MemoryMarker
          key={memoryMarker.id!}
          id={memoryMarker.id!}
          lat={memoryMarker.lat}
          lng={memoryMarker.lng}
        />
      ))}
      <MapWindowPanel />
    </GoogleMap>
  )
}
export default ChizulogMap

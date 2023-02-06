/** @format */

import { Spinner } from '@chakra-ui/react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import { useCallback, useRef } from 'react'
import MapWindowPanel from './mapWindowPanel'
import MemoryMarker from './memoryMarker'

const mapContainerStyle = {
  height: '60vh',
  width: '100%',
}
const ChizulogMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
    language: 'ja',
  })
  const mapRef = useRef<google.maps.Map>()
  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map
  }, [])
  if (loadError) return <p>読み込みに失敗しました。</p>
  if (!isLoaded) return <Spinner />
  return (
    <GoogleMap
      id='map'
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={{
        lat: 43.048225,
        lng: 141.49701,
      }}
      onLoad={onMapLoad}
    >
      <MemoryMarker lat={43} lng={141} />
      <MemoryMarker lat={42} lng={142} />
      <MapWindowPanel />
    </GoogleMap>
  )
}
export default ChizulogMap

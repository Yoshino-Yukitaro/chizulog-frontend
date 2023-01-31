import { Text } from "@chakra-ui/react"
import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import { useCallback, useRef } from "react"

import CommonLayout from "@/components/layouts/commonLayout"


const mapContainerStyle = {
    height: "60vh",
    width: "100%",
  }

const UserMap = () => {
    const  { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
    })
    const mapRef = useRef<google.maps.Map>()
    const onMapLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
      }, []);

    if(loadError) return "Error"
    if(!isLoaded) return "Load中"
    return (
        <CommonLayout>
            <Text color="coconatsPink">サンプル</Text>
            <GoogleMap id="map" mapContainerStyle={mapContainerStyle} zoom={8} center={{
          lat: 43.048225,
          lng: 141.49701,
        }} onLoad={onMapLoad} />
        </CommonLayout>
    )
}
export default UserMap
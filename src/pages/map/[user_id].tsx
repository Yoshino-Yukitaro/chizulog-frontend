/** @format */

import CommonLayout from '@/components/layouts/commonLayout'
import ChizulogMap from '@/components/parts/map/chizulogMap'
import MapTitle from '@/components/parts/map/mapTitle'

const UserMap = () => {
  //const [coordinates, setCoordinates] = useState<GeolocationPosition>()

  return (
    <CommonLayout>
      <MapTitle title='地図のタイトル' />
      <ChizulogMap />
    </CommonLayout>
  )
}
export default UserMap

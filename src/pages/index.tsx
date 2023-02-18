/** @format */
import CommonLayout from '@/components/layouts/commonLayout'
import ChizulogMap from '@/components/parts/map/chizulogMap'
import MapTitle from '@/components/parts/map/mapTitle'

export default function Home() {
  return (
    <CommonLayout>
      <MapTitle title='自分のマップ' />
      <ChizulogMap />
    </CommonLayout>
  )
}

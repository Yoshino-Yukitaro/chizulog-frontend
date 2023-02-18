/** @format */

export interface IMemoryMarker {
  id?: number
  lat: number
  lng: number
  created_at: Date
  updated_at: Date
}

export interface IMemoryLog {
  id?: number
  memory_marker_id: number
  title: string
  description: string
  image_url: string
  created_at: Date
  updated_at: Date
}

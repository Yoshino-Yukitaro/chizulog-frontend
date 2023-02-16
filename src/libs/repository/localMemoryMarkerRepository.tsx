/** @format */

import { IMemoryMarker } from '@/types/indexedDB'
import { IndexedDB } from '../infrastructure/indexedDB'

export class LocalMemoryMarkerRepository {
  private indexedDB
  private static localMemoryMarkerRepository = new LocalMemoryMarkerRepository()
  private constructor() {
    this.indexedDB = IndexedDB.getInstance()
  }
  static getRepository() {
    return this.localMemoryMarkerRepository
  }
  async save({ lat, lng, created_at, updated_at }: IMemoryMarker): Promise<number> {
    if (this.indexedDB.hasFailed()) throw Error('データベースはOpenしていないようです。')
    return await this.indexedDB.memory_marker.add({ lat, lng, created_at, updated_at })
  }
  async findById(id: number): Promise<IMemoryMarker | undefined> {
    if (this.indexedDB.hasFailed()) return undefined
    return await this.indexedDB.memory_marker.get({ id: id })
  }
  async findAll(): Promise<IMemoryMarker[]> {
    if (this.indexedDB.hasFailed()) return []
    return await this.indexedDB.memory_marker.toArray()
  }
  async update({ id, lat, lng, updated_at }: IMemoryMarker): Promise<number> {
    if (!id) throw new Error('idがundefiedです')
    if (this.indexedDB.hasFailed()) return 0
    const updateParam = {
      lat: lat,
      lng: lng,
      updated_at: updated_at,
    }
    return await this.indexedDB.memory_marker.update(id, updateParam)
  }
  async delete(id: number) {
    if (this.indexedDB.hasFailed()) return
    this.indexedDB.memory_marker.delete(id)
  }
}

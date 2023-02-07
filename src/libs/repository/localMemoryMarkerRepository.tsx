/** @format */

import { IMemoryMarker } from '@/types/indexedDB'
import { PromiseExtended } from 'dexie'
import { IndexedDB } from '../infrastructure/indexedDB'

export class LocalMemoryMarkerRepository {
  private indexedDB
  private static localMemoryMarkerRepository = new LocalMemoryMarkerRepository()
  constructor() {
    this.indexedDB = new IndexedDB()
  }
  static getRepository() {
    return this.localMemoryMarkerRepository
  }
  findById(id: number): PromiseExtended<IMemoryMarker | undefined> {
    return this.indexedDB.memory_marker.get({ id: id })
  }
  findAll(): PromiseExtended<IMemoryMarker[]> {
    return this.indexedDB.memory_marker.toArray()
  }
  update({ id, lad, lng, updated_at }: IMemoryMarker): PromiseExtended<number> {
    if (!id) throw new Error('idがundefiedです')
    const updateParam = {
      lad: lad,
      lng: lng,
      updated_at: updated_at,
    }
    return this.indexedDB.memory_marker.update(id, updateParam)
  }
  delete(id: number) {
    this.indexedDB.memory_marker.delete(id)
  }
}

/** @format */

import { IMemoryMarker } from '@/types/indexedDB'
import { PromiseExtended } from 'dexie'
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
  save({ lad, lng, created_at, updated_at }: IMemoryMarker): PromiseExtended<number> {
    const addParam = {
      lad,
      lng,
      created_at,
      updated_at,
    }
    return this.indexedDB.memory_marker.add(addParam)
  }
  findById(id: number): PromiseExtended<IMemoryMarker | undefined> {
    return this.indexedDB.memory_marker.get({ id })
  }
  findAll(): PromiseExtended<IMemoryMarker[]> {
    return this.indexedDB.memory_marker.toArray()
  }
  update({ id, lad, lng, updated_at }: IMemoryMarker): PromiseExtended<number> {
    if (!id) throw new Error(`idが${id}です`)
    const updateParam = {
      lad,
      lng,
      updated_at,
    }
    return this.indexedDB.memory_marker.update(id, updateParam)
  }
  delete(id: number) {
    this.indexedDB.memory_marker.delete(id)
  }
}

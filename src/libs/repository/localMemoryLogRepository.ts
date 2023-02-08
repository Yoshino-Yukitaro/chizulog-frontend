/** @format */

import { IMemoryLog } from '@/types/indexedDB'
import { PromiseExtended } from 'dexie'
import { IndexedDB } from '../infrastructure/indexedDB'

export class LocalMemoryLogRepository {
  private static localMemoryLogRepository = new LocalMemoryLogRepository()
  private indexedDB: IndexedDB
  constructor() {
    this.indexedDB = IndexedDB.getInstance()
  }
  static getInstance() {
    return this.localMemoryLogRepository
  }
  save({
    memory_marker_id,
    title,
    description,
    image_url,
    created_at,
    updated_at,
  }: IMemoryLog): PromiseExtended<number> {
    const addParam = {
      memory_marker_id,
      title,
      description,
      image_url,
      created_at,
      updated_at,
    }
    return this.indexedDB.memory_log.add(addParam)
  }
  findById(id: number): PromiseExtended<IMemoryLog | undefined> {
    return this.indexedDB.memory_log.get({ id: id })
  }
  findAll(): PromiseExtended<IMemoryLog[]> {
    return this.indexedDB.memory_log.toArray()
  }
  update({ id, title, description, image_url, updated_at }: IMemoryLog): PromiseExtended<number> {
    if (!id) throw Error(`idが${id}です`)
    const updateParam = {
      title: title,
      description: description,
      image_url: image_url,
      updated_at: updated_at,
    }
    return this.indexedDB.memory_log.update(id, updateParam)
  }
}

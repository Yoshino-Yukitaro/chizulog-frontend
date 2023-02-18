/** @format */

import { IMemoryLog } from '@/types/indexedDB'
import { IndexedDB } from '../infrastructure/indexedDB'

export class LocalMemoryLogRepository {
  private indexedDB
  private static localMemoryLogRepository = new LocalMemoryLogRepository()
  private constructor() {
    this.indexedDB = IndexedDB.getInstance()
  }
  static getRepository() {
    return this.localMemoryLogRepository
  }
  async save({
    memory_marker_id,
    title,
    description,
    image_url,
    created_at,
    updated_at,
  }: IMemoryLog): Promise<number> {
    if (this.indexedDB.hasFailed()) throw Error('データベースはOpenしていないようです。')
    return await this.indexedDB.memory_log.add({
      memory_marker_id,
      title,
      description,
      image_url,
      created_at,
      updated_at,
    })
  }
  async findById(id: number): Promise<IMemoryLog | undefined> {
    if (this.indexedDB.hasFailed()) return undefined
    return await this.indexedDB.memory_log.get({ id: id })
  }
  async findAll(): Promise<IMemoryLog[]> {
    if (this.indexedDB.hasFailed()) return []
    return await this.indexedDB.memory_log.toArray()
  }
  async findAllByMemoryMarkerId(memoryMarkerId: number): Promise<IMemoryLog[]> {
    if (this.indexedDB.hasFailed()) return []
    return await this.indexedDB.memory_log
      .where({ memory_marker_id: memoryMarkerId })
      .sortBy('created_at')
  }
  async update({ id, title, description, image_url, updated_at }: IMemoryLog): Promise<number> {
    if (!id) throw new Error('idがundefiedです')
    if (this.indexedDB.hasFailed()) return 0
    const updateParam = {
      title,
      description,
      image_url,
      updated_at,
    }
    return await this.indexedDB.memory_log.update(id, updateParam)
  }
  async delete(id: number) {
    if (this.indexedDB.hasFailed()) return
    this.indexedDB.memory_log.delete(id)
  }
}

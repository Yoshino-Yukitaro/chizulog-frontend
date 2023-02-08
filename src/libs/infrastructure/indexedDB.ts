/** @format */

import { IMemoryLog, IMemoryMarker } from '@/types/indexedDB'
import Dexie from 'dexie'

export class IndexedDB extends Dexie {
  static indexedDB = new IndexedDB()
  memory_marker!: Dexie.Table<IMemoryMarker, number>
  memory_log!: Dexie.Table<IMemoryLog, number>
  private constructor() {
    super('local_memory_db')
    this.version(1).stores({
      memory_marker: '++id, lad, lng, created_at, updated_at',
      memory_log: '++id, memory_marker_id, title, description, image_url, created_at, updated_at',
    })
  }
  static getInstance() {
    return this.indexedDB
  }
}

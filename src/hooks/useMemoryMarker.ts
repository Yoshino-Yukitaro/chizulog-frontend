/** @format */

import { LocalMemoryMarkerRepository } from '@/libs/repository/localMemoryMarkerRepository'
import { IMemoryMarker } from '@/types/indexedDB'
import { PromiseExtended } from 'dexie'

const useMemoryMarker = (
  id?: number,
): PromiseExtended<IMemoryMarker | IMemoryMarker[] | undefined> => {
  const repository = LocalMemoryMarkerRepository.getRepository()
  if (id) return repository.findById(id)
  return repository.findAll()
}

export default useMemoryMarker

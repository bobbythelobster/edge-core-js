import { EdgeLog } from '../types/types'

/**
 * NYM mixFetch is disabled due to Android initialization issues.
 * All calls will throw immediately.
 */
export async function initMixFetch(log: EdgeLog): Promise<never> {
  throw new Error('NYM is disabled')
}

export async function queueMixFetch(
  uri: string,
  opts: RequestInit & { mode?: string }
): Promise<Response> {
  throw new Error('NYM is disabled')
}

import type { AccessArgs } from 'payload'

import type { User } from '@/payload-types'
import { checkRole } from './utilities'

type isAdmin = (args: AccessArgs<User>) => boolean

export const isAdmin: isAdmin = ({ req: { user } }) => {
  if (user) {
    return checkRole(['admin'], user)
  }

  return false
}

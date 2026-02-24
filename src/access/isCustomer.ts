import type { AccessArgs } from 'payload'

import type { User } from '@/payload-types'
import { checkRole } from './utilities'

type isCustomer = (args: AccessArgs<User>) => boolean

export const customer: isCustomer = ({ req: { user } }) => {
  if (user) {
    return checkRole(['admin'], user)
  }

  return false
}

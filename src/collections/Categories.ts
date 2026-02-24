import type { CollectionConfig } from 'payload'

import { publicAccess } from '../access/publicAccess'
import { isAuthenticated } from '../access/isAuthenticated'
import { slugField } from '@/fields/slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: isAuthenticated,
    delete: isAuthenticated,
    read: publicAccess,
    update: isAuthenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField(),
  ],
}

import type { CollectionConfig } from 'payload'

import { slugField } from '@/fields/slug'
import { publicAccess } from '../access/publicAccess'
import { isAuthenticated } from '../access/isAuthenticated'

export const Series: CollectionConfig = {
  slug: 'series',
  access: {
    create: isAuthenticated,
    delete: isAuthenticated,
    read: publicAccess,
    update: isAuthenticated,
  },
  admin: {
    defaultColumns: ['title', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    ...slugField(),
  ],
}

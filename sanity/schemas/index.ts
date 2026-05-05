import blogPost from './blogPost'
import freebie from './freebie'
import page from './page'
import hubResource from './hubResource'
import siteSettings from './siteSettings'
import { blockTypes } from './blocks'

export const schemaTypes = [
  page,
  hubResource,
  freebie,
  blogPost,
  siteSettings,
  ...blockTypes,
]

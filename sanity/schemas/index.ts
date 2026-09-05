import birthStory from './birthStory'
import blogPost from './blogPost'
import review from './review'
import freebie from './freebie'
import page from './page'
import pageHero from './pageHero'
import hubResource from './hubResource'
import siteSettings from './siteSettings'
import navigation from './navigation'
import product from './product'
import { blockTypes } from './blocks'

export const schemaTypes = [
  page,
  pageHero,
  hubResource,
  freebie,
  blogPost,
  birthStory,
  review,
  siteSettings,
  navigation,
  product,
  ...blockTypes,
]

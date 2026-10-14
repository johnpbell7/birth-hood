import birthStory from './birthStory'
import blogPost from './blogPost'
import review from './review'
import freebie from './freebie'
import page from './page'
import pageHero from './pageHero'
import hubResource from './hubResource'
import hubSettings from './hubSettings'
import siteSettings from './siteSettings'
import navigation from './navigation'
import product from './product'
import { blockTypes } from './blocks'

export const schemaTypes = [
  page,
  pageHero,
  hubResource,
  hubSettings,
  freebie,
  blogPost,
  birthStory,
  review,
  siteSettings,
  navigation,
  product,
  ...blockTypes,
]

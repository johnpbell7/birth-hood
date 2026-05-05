import { getInstagramPosts } from '@/lib/instagram'
import InstagramGrid from './InstagramGrid'

export default async function InstagramSection() {
  const posts = await getInstagramPosts(6)
  return <InstagramGrid posts={posts} />
}

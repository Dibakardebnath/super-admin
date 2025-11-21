import { db } from '@crm/db'
import { posts, media, Post, Media, NewMedia } from '@crm/db'
import { eq } from 'drizzle-orm'
import { PostCreateInput } from '@crm/types'



export class CmsService {
  async getPosts(): Promise<{ posts: Post[] }> {
    const postsList = await db.select().from(posts)
    return { posts: postsList }
  }

  async getPost(id: string): Promise<{ post: Post }> {
    const [post] = await db.select().from(posts).where(eq(posts.id, id))
    if (!post) {
      throw new Error('Post not found')
    }
    return { post }
  }

  async createPost(data: PostCreateInput): Promise<{ post: Post; message: string }> {
    // Convert string dates to Date objects for Drizzle
    const processedData = {
      ...data,
      publishedAt: typeof data.publishedAt === 'string' ? new Date(data.publishedAt) : data.publishedAt,
    }
    const [post] = await db.insert(posts).values(processedData).returning()
    return {
      post,
      message: 'Post created successfully',
    }
  }

  async updatePost(id: string, data: Partial<PostCreateInput>): Promise<{ post: Post; message: string }> {
    // Convert string dates to Date objects for Drizzle
    const processedData = {
      ...data,
      updatedAt: new Date(),
      publishedAt: typeof data.publishedAt === 'string' ? new Date(data.publishedAt) : data.publishedAt,
    }
    const [post] = await db
      .update(posts)
      .set(processedData)
      .where(eq(posts.id, id))
      .returning()
    
    if (!post) {
      throw new Error('Post not found')
    }
    
    return {
      post,
      message: 'Post updated successfully',
    }
  }

  async deletePost(id: string): Promise<{ message: string }> {
    await db.delete(posts).where(eq(posts.id, id))
    return { message: 'Post deleted successfully' }
  }

  async getMedia(): Promise<{ media: Media[] }> {
    const mediaList = await db.select().from(media)
    return { media: mediaList }
  }

  async uploadMedia(data: NewMedia): Promise<{ media: Media; message: string }> {
    const [mediaItem] = await db.insert(media).values(data).returning()
    return {
      media: mediaItem,
      message: 'Media uploaded successfully',
    }
  }
}
import { CmsService } from './cms.service'
import { PostCreateInput } from '@crm/types'

const cmsService = new CmsService()

export const cmsController = {
  getPosts: async () => {
    const result = await cmsService.getPosts()
    return {
      posts: result.posts.map(post => ({
        ...post,
        status: post.status as 'draft' | 'published' | 'archived',
        excerpt: post.excerpt || undefined,
        createdAt: (post.createdAt || new Date()).toString(),
        updatedAt: (post.updatedAt || new Date()).toString(),
        publishedAt: post.publishedAt?.toString() || undefined,
      })),
    }
  },

  getPost: async ({ params }: { params: { id: string } }) => {
    const result = await cmsService.getPost(params.id)
    return {
      post: {
        ...result.post,
        status: result.post.status as 'draft' | 'published' | 'archived',
        excerpt: result.post.excerpt || undefined,
        createdAt: result.post.createdAt?.toString() || new Date().toISOString(),
        updatedAt: result.post.updatedAt?.toString() || new Date().toISOString(),
        publishedAt: result.post.publishedAt?.toString() || undefined,
      },
      message: 'Post fetched successfully',
    }
  },

  createPost: async ({ body }: { body: PostCreateInput }) => {
    const result = await cmsService.createPost(body)
    return {
      post: {
        ...result.post,
        status: result.post.status as 'draft' | 'published' | 'archived',
        excerpt: result.post.excerpt || undefined,
        createdAt: result.post.createdAt?.toString() || new Date().toISOString(),
        updatedAt: result.post.updatedAt?.toString() || new Date().toISOString(),
        publishedAt: result.post.publishedAt?.toString() || undefined,
      },
      message: result.message,
    }
  },

  updatePost: async ({ params, body }: { params: { id: string }; body: Partial<PostCreateInput> }) => {
    const result = await cmsService.updatePost(params.id, body)
    return {
      post: {
        ...result.post,
        status: result.post.status as 'draft' | 'published' | 'archived',
        excerpt: result.post.excerpt || undefined,
        createdAt: result.post.createdAt?.toString() || new Date().toISOString(),
        updatedAt: result.post.updatedAt?.toString() || new Date().toISOString(),
        publishedAt: result.post.publishedAt?.toString() || undefined,
      },
      message: result.message,
    }
  },

  deletePost: async ({ params }: { params: { id: string } }) => {
    return await cmsService.deletePost(params.id)
  },

  getMedia: async () => {
    const result = await cmsService.getMedia()
    return {
      media: result.media.map(mediaItem => ({
        ...mediaItem,
        createdAt: mediaItem.createdAt?.toString() || new Date().toISOString(),
      })),
    }
  },

  uploadMedia: async ({ body }: { body: any }) => {
    const result = await cmsService.uploadMedia(body)
    return {
      media: {
        ...result.media,
        createdAt: result.media.createdAt?.toString() || new Date().toISOString(),
      },
      message: result.message,
    }
  },
}
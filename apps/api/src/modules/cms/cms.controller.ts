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
        excerpt: post.excerpt === null ? undefined : post.excerpt,
        createdAt: (post.createdAt || new Date()).toString(),
        updatedAt: (post.updatedAt || new Date()).toString(),
        publishedAt: post.publishedAt?.toString(),
      })),
    }
  },

  getPost: async ({ params }: { params: { id: string } }) => {
    const result = await cmsService.getPost(params.id)
    return {
      post: {
        ...result.post,
        createdAt: result.post.createdAt?.toString(),
        updatedAt: result.post.updatedAt?.toString(),
        publishedAt: result.post.publishedAt?.toString(),
      },
      message: 'Post fetched successfully',
    }
  },

  createPost: async ({ body }: { body: PostCreateInput }) => {
    const result = await cmsService.createPost(body)
    return {
      post: {
        ...result.post,
        createdAt: result.post.createdAt?.toString(),
        updatedAt: result.post.updatedAt?.toString(),
        publishedAt: result.post.publishedAt?.toString(),
      },
      message: result.message,
    }
  },

  updatePost: async ({ params, body }: { params: { id: string }; body: Partial<PostCreateInput> }) => {
    const result = await cmsService.updatePost(params.id, body)
    return {
      post: {
        ...result.post,
        createdAt: result.post.createdAt?.toString(),
        updatedAt: result.post.updatedAt?.toString(),
        publishedAt: result.post.publishedAt?.toString(),
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
        createdAt: mediaItem.createdAt?.toString(),
      })),
    }
  },

  uploadMedia: async ({ body }: { body: any }) => {
    const result = await cmsService.uploadMedia(body)
    return {
      media: {
        ...result.media,
        createdAt: result.media.createdAt?.toString(),
      },
      message: result.message,
    }
  },
}
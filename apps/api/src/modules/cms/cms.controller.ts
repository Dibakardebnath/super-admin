import { CmsService } from './cms.service'
import { PostCreateInput } from '@crm/types'

const cmsService = new CmsService()

export const cmsController = {
  getPosts: async () => {
    return await cmsService.getPosts()
  },

  getPost: async ({ params }: { params: { id: string } }) => {
    return await cmsService.getPost(params.id)
  },

  createPost: async ({ body }: { body: PostCreateInput }) => {
    return await cmsService.createPost(body)
  },

  updatePost: async ({ params, body }: { params: { id: string }; body: Partial<PostCreateInput> }) => {
    return await cmsService.updatePost(params.id, body)
  },

  deletePost: async ({ params }: { params: { id: string } }) => {
    return await cmsService.deletePost(params.id)
  },

  getMedia: async () => {
    return await cmsService.getMedia()
  },

  uploadMedia: async ({ body }: { body: any }) => {
    return await cmsService.uploadMedia(body)
  },
}
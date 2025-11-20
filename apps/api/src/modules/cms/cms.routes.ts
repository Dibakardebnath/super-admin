import { Elysia, t } from 'elysia'
import { cmsController } from './cms.controller'
import { cmsSchema } from './cms.schema'

export const cmsRoutes = new Elysia({ prefix: '/cms' })
  .model(cmsSchema)
  .get('/posts', cmsController.getPosts, {
    response: 'postsResponse',
  })
  .get('/posts/:id', cmsController.getPost, {
    response: 'postResponse',
  })
  .post('/posts', cmsController.createPost, {
    body: 'postCreateSchema',
    response: 'postResponse',
  })
  .put('/posts/:id', cmsController.updatePost, {
    body: 'postUpdateSchema',
    response: 'postResponse',
  })
  .delete('/posts/:id', cmsController.deletePost)
  .get('/media', cmsController.getMedia, {
    response: 'mediaResponse',
  })
  .post('/media', cmsController.uploadMedia, {
    response: 'mediaItemResponse',
  })
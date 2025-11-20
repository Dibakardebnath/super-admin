import { t } from 'elysia'
import { PostSchema, MediaSchema } from '@crm/types'

export const cmsSchema = {
  postCreateSchema: t.Omit(PostSchema, ['id', 'createdAt', 'updatedAt']),
  postUpdateSchema: t.Partial(t.Omit(PostSchema, ['id', 'createdAt', 'updatedAt'])),
  postResponse: t.Object({
    post: PostSchema,
    message: t.String(),
  }),
  postsResponse: t.Object({
    posts: t.Array(PostSchema),
  }),
  mediaResponse: t.Object({
    media: t.Array(MediaSchema),
  }),
  mediaItemResponse: t.Object({
    media: MediaSchema,
    message: t.String(),
  }),
}
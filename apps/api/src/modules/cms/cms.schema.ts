import { t } from 'elysia'

export const cmsSchema = {
  postCreateSchema: t.Object({
    title: t.String(),
    slug: t.String(),
    content: t.String(),
    excerpt: t.Optional(t.String()),
    status: t.Enum(['draft', 'published', 'archived']),
    publishedAt: t.Optional(t.String()),
    authorId: t.String(),
  }),
  postUpdateSchema: t.Partial(
    t.Object({
      title: t.String(),
      slug: t.String(),
      content: t.String(),
      excerpt: t.Optional(t.String()),
      status: t.Union([t.Literal('draft'), t.Literal('published'), t.Literal('archived')]),
      publishedAt: t.Optional(t.String()),
      authorId: t.String(),
    })
  ),
  postResponse: t.Object({
    post: t.Object({
      id: t.String(),
      title: t.String(),
      slug: t.String(),
      content: t.String(),
      excerpt: t.Optional(t.String()),
      status: t.Union([t.Literal('draft'), t.Literal('published'), t.Literal('archived')]),
      publishedAt: t.Optional(t.String()),
      createdAt: t.String(),
      updatedAt: t.String(),
      authorId: t.String(),
    }),
    message: t.String(),
  }),
  postsResponse: t.Object({
    posts: t.Array(
      t.Object({
        id: t.String(),
        title: t.String(),
        slug: t.String(),
        content: t.String(),
        excerpt: t.Optional(t.String()),
        status: t.Union([t.Literal('draft'), t.Literal('published'), t.Literal('archived')]),
        publishedAt: t.Optional(t.String()),
        createdAt: t.String(),
        updatedAt: t.String(),
        authorId: t.String(),
      })
    ),
  }),
  mediaResponse: t.Object({
    media: t.Array(
      t.Object({
        id: t.String(),
        filename: t.String(),
        originalName: t.String(),
        mimeType: t.String(),
        size: t.Number(),
        path: t.String(),
        createdAt: t.String(),
      })
    ),
  }),
  mediaItemResponse: t.Object({
    media: t.Object({
      id: t.String(),
      filename: t.String(),
      originalName: t.String(),
      mimeType: t.String(),
      size: t.Number(),
      path: t.String(),
      createdAt: t.String(),
    }),
    message: t.String(),
  }),
}
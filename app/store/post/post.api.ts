import { IComment } from '@/app/models/Comment';
import { IPost } from '@/app/models/Post'
import {BaseQueryFn, FetchArgs, createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface DataWithHeaders<T> {
  data: T;
  headers: Headers;
}

export const postsApi = createApi({
  reducerPath: '/',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: build => ({
    getPosts: build.query<{apiResponse: IPost[], totalCount: number}, number>({
      query: (page: number) => ({
        url: `/posts/?_page=${page}`,
      }),
      transformResponse(apiResponse: IPost[], meta: any){
        return { apiResponse,  totalCount: Number(meta.response.headers.get('X-Total-Count'))}
      }
    }),
    getComments: build.query<IComment[], number>({
      query: (id: number) => ({
        url: `/comments?postId=${id}`
      })
    })
  })
})


export const {useLazyGetPostsQuery, useGetCommentsQuery} = postsApi
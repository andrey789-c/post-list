import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/query'
import { postsApi } from "./post/post.api";
import { createWrapper } from "next-redux-wrapper";


export function makeStore() {
  return configureStore({
      reducer: {
        [postsApi.reducerPath]: postsApi.reducer
      },
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(postsApi.middleware)
      }
  })
}

export const store = makeStore()

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
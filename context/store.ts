import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import themeReducer from './theme';

export const store = () =>
  configureStore({
    reducer: {
      theme: themeReducer,
    },
  });

export const wrapper = createWrapper(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
// @ts-ignore
export type RootState = ReturnType<typeof store['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store;

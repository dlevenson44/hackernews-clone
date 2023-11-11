import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction, AnyAction } from '@reduxjs/toolkit'

interface InitialState {
  loading: boolean
  articleIds: number[]
  renderedArticles: number[]
}

const initialState: InitialState = {
  loading: false,
  articleIds: [],
  renderedArticles: [],
}

export const fetchArticles: any = createAsyncThunk(
  'counter/articles',
  async () => {
    console.log(234234234234234)
    const res = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
    ).then((data) => data.json())
    return res
  }
)

export const fetchingSlice: any = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchArticles.pending]: (state) => {
      state.loading = true
    },
    [fetchArticles.fulfilled]: (state, action) => {
      state.loading = false
      state.articleIds = action.payload
      state.renderedArticles = action.payload.slice(0, 25)
    },
  },
})

export const { fetchArticleIds } = fetchingSlice.actions

export default fetchingSlice.reducer

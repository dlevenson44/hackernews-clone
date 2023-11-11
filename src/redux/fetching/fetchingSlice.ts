import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface InitialState {
  loading: boolean
  articleIds: number[]
  renderedArticleIds: number[]
}

interface ArticleData {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title: string
  type: string
  url: string
}

const initialState: InitialState = {
  loading: false,
  articleIds: [],
  renderedArticleIds: [],
}

export const fetchArticles: any = createAsyncThunk(
  'articles/articles',
  async () => {
    const res = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
    ).then((data) => data.json())
    return res
  }
)

export const fetchingSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    // setRenderedArticleData: (state, action) => {
    //   state.renderedArticleData = [...state.renderedArticleData, action.payload]
    // },
  },
  extraReducers: {
    [fetchArticles.pending]: (state) => {
      state.loading = true
    },
    [fetchArticles.fulfilled]: (state, action) => {
      state.loading = false
      state.articleIds = action.payload
      state.renderedArticleIds = action.payload.slice(0, 25)
    }
  },
})

// export const { setRenderedArticleData } = fetchingSlice.actions

export default fetchingSlice.reducer

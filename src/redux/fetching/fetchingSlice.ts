import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface InitialState {
  loading: boolean
  articleIds: number[]
  renderedArticleIds: number[]
  // update type
  starredArticleIds: any[]
  articleView: 'latest' | 'starred'
}

const initialState: InitialState = {
  loading: false,
  articleIds: [],
  renderedArticleIds: [],
  starredArticleIds: [],
  articleView: 'latest',
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
    setArticleView: (state, action) => {
      state.articleView = action.payload
    },
    setStarredArticle: (state, action) => {
      state.starredArticleIds = [...state.starredArticleIds, action.payload]
    },
    removeStarredArticle: (state, action) => {
      state.starredArticleIds = state.starredArticleIds.filter(
        ({ articleId }) => articleId !== action.payload
      )
    },
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

export const { setArticleView, setStarredArticle, removeStarredArticle } =
  fetchingSlice.actions

export default fetchingSlice.reducer

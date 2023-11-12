import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import type { ArticleData } from '../../types/articles'

interface StarredArticles {
  articleId: number
  articleData: ArticleData
}

export interface InitialState {
  loading: boolean
  articleIds: number[]
  renderedArticleIds: number[]
  starredArticleIds: StarredArticles[]
  articleView: 'latest' | 'starred'
  showingMoreArticles: boolean
}

const initialState: InitialState = {
  loading: false,
  articleIds: [],
  renderedArticleIds: [],
  starredArticleIds: [],
  articleView: 'latest',
  showingMoreArticles: false,
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

export const articlesSlice = createSlice({
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
    showMoreToggle: (state) => {
      state.showingMoreArticles = !state.showingMoreArticles
      if (state.showingMoreArticles) {
        state.renderedArticleIds = state.articleIds.slice(0, 25)
      } else {
        state.renderedArticleIds = state.articleIds.slice(0, 12)
      }
    },
  },
  extraReducers: {
    [fetchArticles.pending]: (state) => {
      state.loading = true
    },
    [fetchArticles.fulfilled]: (state, action) => {
      state.loading = false
      state.articleIds = action.payload
      state.renderedArticleIds = action.payload.slice(0, 12)
    },
  },
})

export const {
  setArticleView,
  setStarredArticle,
  removeStarredArticle,
  showMoreToggle,
} = articlesSlice.actions

export default articlesSlice.reducer

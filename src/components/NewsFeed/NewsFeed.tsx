import React from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useSelector, useDispatch } from 'react-redux'

import ArticleCard from './ArticleCard'
import { fetchArticles } from '../../redux/fetching/fetchingSlice'
import type { RootState } from '../../redux/store'

const NewsFeed: React.FunctionComponent = () => {
  const dispatch = useDispatch()
  const { loading, renderedArticleIds } = useSelector(
    (state: RootState) => state.fetching
  )

  React.useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  return (
    <Stack sx={{ borderBottom: '4px solid red' }}>
      {loading && (
        <Stack direction="row" justifyContent="center">
          {' '}
          <CircularProgress />
        </Stack>
      )}
      {!renderedArticleIds && !loading && (
        <Stack direction="row" justifyContent="center">
          <Typography>No articles found!</Typography>
        </Stack>
      )}
      {renderedArticleIds && (
        <Stack spacing={3} alignItems="center">
          {renderedArticleIds.map((article: number, idx: number) => (
            <ArticleCard key={article} articleId={article} idx={idx} />
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default NewsFeed

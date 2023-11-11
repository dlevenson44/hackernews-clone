import React from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useSelector, useDispatch } from 'react-redux'

import ArticleCard from './ArticleCard'
import { fetchArticles } from '../../redux/fetching/fetchingSlice'

const NewsFeed: React.FunctionComponent = () => {
  const dispatch = useDispatch()
  const { loading, renderedArticles } = useSelector(
    (state: any) => state.fetching
  )
  console.log('aid: ', renderedArticles)

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
      {!renderedArticles && !loading && (
        <Stack direction="row" justifyContent="center">
          <Typography>No articles found!</Typography>
        </Stack>
      )}
      {renderedArticles &&
        renderedArticles.map((article: number, idx: number) => (
          <ArticleCard key={article} articleId={article} idx={idx} />
        ))}
    </Stack>
  )
}

export default NewsFeed

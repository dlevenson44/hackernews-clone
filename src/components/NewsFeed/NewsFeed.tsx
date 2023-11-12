import React from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useSelector, useDispatch } from 'react-redux'

import ArticleCard from './ArticleCard'
import { fetchArticles } from '../../redux/articles/articlesSlice'
import type { RootState } from '../../redux/store'

const NewsFeed: React.FunctionComponent = () => {
  const dispatch = useDispatch()
  const { loading, renderedArticleIds, starredArticleIds, articleView } =
    useSelector((state: RootState) => state.articles)

  React.useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])
  console.log(
    'article view and length:  ',
    articleView,
    !!starredArticleIds.length
  )

  return (
    <Stack>
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
      {articleView === 'latest' && renderedArticleIds && (
        <Stack spacing={3} alignItems="center">
          {renderedArticleIds.map((article: number, idx: number) => (
            <ArticleCard key={article} articleId={article} idx={idx} />
          ))}
        </Stack>
      )}
      {articleView === 'starred' &&
        !!starredArticleIds.length &&
        starredArticleIds.map(({ articleData }, idx) => (
          <Stack spacing={3} alignItems="center">
            <ArticleCard
              key={articleData?.id}
              starredArticleData={articleData}
              idx={idx}
            />
          </Stack>
        ))}

      {articleView === 'starred' && !starredArticleIds.length && (
        <Stack alignItems="center">
          <Typography variant="h3">No Starred Articles</Typography>
        </Stack>
      )}
    </Stack>
  )
}

export default NewsFeed

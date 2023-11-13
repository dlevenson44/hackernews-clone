import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useSelector, useDispatch } from 'react-redux'

import ArticleCard from './ArticleCard'
import {
  fetchArticles,
  showMoreToggle,
} from '../../redux/articles/articlesSlice'
import type { RootState } from '../../redux/store'
import { Wrapper, LatestStarredToggle } from '../Shared'

const NewsFeed: React.FunctionComponent = () => {
  const dispatch = useDispatch()
  const {
    loading,
    renderedArticleIds,
    starredArticleIds,
    articleView,
    showingMoreArticles,
  } = useSelector((state: RootState) => state.articles)

  React.useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  return (
    <Wrapper>
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
          <Stack spacing={3}>
            {renderedArticleIds.map((article: number, idx: number) => (
              <ArticleCard key={article} articleId={article} idx={idx} />
            ))}
          </Stack>
        )}
        {articleView === 'starred' &&
          !!starredArticleIds.length &&
          starredArticleIds.map(({ articleData }, idx) => (
            <Stack spacing={3} alignItems="center" key={articleData?.id}>
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
        <Button
          variant="contained"
          onClick={() => dispatch(showMoreToggle())}
          sx={{
            alignSelf: 'start',
            ml: 10,
            my: 3,
            color: '#FFFFFF',
            textTransform: 'lowercase',
          }}
        >
          {showingMoreArticles ? 'show less' : 'show more'}
        </Button>
        <Box
          sx={{
            borderBottom: '#FE7139 solid 2px',
            width: '90%',
            alignSelf: 'center',
            mb: 5,
          }}
        />
        <Stack alignItems="center" mb={10} spacing={2}>
          <Typography
            fontSize="16px"
            fontWeight={700}
            lineHeight="22px"
            letterSpacing="0em"
            textAlign="left"
          >
            Hacker News
          </Typography>
          <LatestStarredToggle />
        </Stack>
      </Stack>
    </Wrapper>
  )
}

export default NewsFeed

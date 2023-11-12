import React from 'react'

import Stack from '@mui/material/Stack'

import ArticleCardDetails from './ArticleCardDetails'
import ArticleCardHeader from './ArticleCardHeader'
import type { ArticleData } from '../../types/articles'

interface ArticleCardProps {
  articleId?: number
  starredArticleData?: ArticleData
  idx: number
}

const ArticleCard: React.FunctionComponent<ArticleCardProps> = ({
  articleId,
  starredArticleData,
  idx,
}) => {
  const [articleData, setArticleData] = React.useState<
    ArticleData | undefined
  >()

  React.useEffect(() => {
    if (!starredArticleData) {
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${articleId}.json?print=pretty`
      )
        .then((res) => res.json())
        .then((res) => setArticleData(res))
    }
  }, [setArticleData, articleId, starredArticleData])

  if (!articleData && !starredArticleData) return null

  return (
    // <Stack justifyContent="center" spacing={1} width="100%">
    <Stack px={9}>
      <ArticleCardHeader
        articleData={starredArticleData ? starredArticleData : articleData}
        idx={idx}
      />
      <ArticleCardDetails
        articleData={starredArticleData ? starredArticleData : articleData}
      />
    </Stack>
  )
}

export default ArticleCard

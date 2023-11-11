import React from 'react'

import Stack from '@mui/material/Stack'

import ArticleCardDetails from './ArticleCardDetails'
import ArticleCardHeader from './ArticleCardHeader'

interface ArticleCardProps {
  articleId: number
  idx: number
}

const ArticleCard: React.FunctionComponent<ArticleCardProps> = ({
  articleId,
  idx,
}) => {
  const [articleData, setArticleData] = React.useState<any>()
  // console.log('ad: ', articleData)
  React.useEffect(() => {
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${articleId}.json?print=pretty`
    )
      .then((res) => res.json())
      .then((res) => setArticleData(res))
  }, [setArticleData, articleId])

  return (
    <Stack justifyContent="center" spacing={2} width="90%">
      <ArticleCardHeader articleData={articleData} idx={idx} />
      <ArticleCardDetails articleData={articleData} />
    </Stack>
  )
}

export default ArticleCard

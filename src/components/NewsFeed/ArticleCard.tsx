import React from 'react'

interface ArticleCardProps {
  articleId: number
  idx: number
}

const ArticleCard: React.FunctionComponent<ArticleCardProps> = ({
  articleId,
  idx,
 }) => {
  return <h1>NEW CARD</h1>
}

export default ArticleCard

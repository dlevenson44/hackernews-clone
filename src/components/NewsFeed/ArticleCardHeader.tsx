import React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import type { ArticleData } from '../../types/articles'

interface ArticleCardHeaderProps {
  articleData: ArticleData
  idx: number
}

const ArticleCardHeader: React.FunctionComponent<ArticleCardHeaderProps> = ({
  articleData,
  idx,
}) => {
  const sanitizedUrl = articleData?.url.slice(8).split('/')[0]

  return (
    <Stack direction="row" spacing={3}>
      <Typography
        color="#00000080"
        fontFamily="Ubuntu, monospace"
        fontSize="18px"
        fontWeight={400}
        lineHeight="18px"
        letterSpacing="0em"
        textAlign="left"
      >
        {idx + 1}.
      </Typography>
      <Typography
        color="#000000"
        fontFamily="Ubuntu, monospace"
        fontSize="18px"
        fontWeight={700}
        lineHeight="18px"
        letterSpacing="0em"
        textAlign="left"
      >
        {articleData?.title}
      </Typography>
      <Typography
        color="#00000080"
        fontSize="10px"
        fontWeight={400}
        lineHeight="14px"
        letterSpacing="0em"
        textAlign="left"
      >
        ({sanitizedUrl})
      </Typography>
    </Stack>
  )
}

export default ArticleCardHeader

import React from 'react'

import StarIcon from '@mui/icons-material/Star'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'

import {
  setStarredArticle,
  removeStarredArticle,
} from '../../redux/articles/articlesSlice'
import type { RootState } from '../../redux/store'
import type { ArticleData } from '../../types/articles'

interface ArticleCardDetailsProps {
  articleData?: ArticleData
}

interface HandleStarClick {
  payload: Record<string, any> | number
}

const ArticleCardDetails: React.FunctionComponent<ArticleCardDetailsProps> = ({
  articleData,
}) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const { starredArticleIds } = useSelector(
    (state: RootState) => state.articles
  )

  const isArticleStarred = starredArticleIds.filter(
    ({ articleId }) => articleId === articleData?.id
  ).length

  const handleStarClick = (
    actionType: 'addStar' | 'removeStar'
  ): HandleStarClick =>
    actionType === 'addStar'
      ? dispatch(setStarredArticle({ articleData, articleId: articleData?.id }))
      : dispatch(removeStarredArticle(articleData?.id))

  return (
    <Stack direction="row" spacing={1} alignItems="center" pl={6}>
      <Typography
        variant="body1"
        color={theme.palette.mode === 'light' ? '#00000080' : '#FFFFFF80'}
        fontSize="14px"
        fontWeight={400}
        lineHeight="14px"
        letterSpacing="0em"
        textAlign="left"
      >
        {articleData?.score} points by {articleData?.by}{' '}
        {articleData?.time && moment(articleData?.time * 1000).fromNow()}
      </Typography>
      <Divider
        flexItem
        orientation="vertical"
        sx={{
          backgroundColor:
            theme.palette.mode === 'light' ? '#00000080' : '#FFFFFF80',
        }}
      />
      <Typography
        variant="body1"
        color={theme.palette.mode === 'light' ? '#00000080' : '#FFFFFF80'}
        fontSize="14px"
        fontWeight={400}
        lineHeight="14px"
        letterSpacing="0em"
        textAlign="left"
      >
        {articleData?.descendants} comments
      </Typography>
      <Divider
        flexItem
        orientation="vertical"
        sx={{
          backgroundColor:
            theme.palette.mode === 'light' ? '#00000080' : '#FFFFFF80',
        }}
      />
      <Stack direction="row" alignItems="center">
        <IconButton
          onClick={() =>
            handleStarClick(isArticleStarred ? 'removeStar' : 'addStar')
          }
        >
          {isArticleStarred ? (
            <StarIcon color="primary" sx={{ fontSize: '14px' }} />
          ) : (
            <StarBorderOutlinedIcon sx={{ fontSize: '14px' }} />
          )}
        </IconButton>
        <Typography
          color={theme.palette.mode === 'light' ? '#00000080' : '#FFFFFF80'}
          fontSize="14px"
        >
          {isArticleStarred ? 'saved' : 'save'}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default ArticleCardDetails

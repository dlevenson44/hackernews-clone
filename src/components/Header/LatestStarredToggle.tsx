import React from 'react'

import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'

import { setArticleView } from '../../redux/articles/articlesSlice'
import type { RootState } from '../../redux/store'

const LatestStarredToggle: React.FunctionComponent = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const { articleView } = useSelector((state: RootState) => state.articles)

  const inactiveLinkColor = React.useMemo(
    () => (theme.palette.mode === 'light' ? 'primary.dark' : 'primary.light'),
    [theme]
  )

  return (
    <Stack direction="row" spacing={1}>
      <Link
        onClick={() => dispatch(setArticleView('latest'))}
        color={articleView === 'latest' ? 'primary.main' : inactiveLinkColor}
        underline="none"
        sx={{
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: articleView === 'latest' ? 700 : 0,
          lineHeight: '19px',
          letterSpacing: '0em',
          textAlign: 'left',
        }}
      >
        latest
      </Link>
      <Divider
        flexItem
        orientation="vertical"
        sx={{ backgroundColor: 'primary.dark' }}
      />
      <Link
        onClick={() => dispatch(setArticleView('starred'))}
        color={articleView === 'starred' ? 'primary.main' : inactiveLinkColor}
        underline="none"
        sx={{
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: articleView === 'starred' ? 700 : 0,
          lineHeight: '19px',
          letterSpacing: '0em',
          textAlign: 'left',
        }}
      >
        starred
      </Link>
    </Stack>
  )
}

export default LatestStarredToggle

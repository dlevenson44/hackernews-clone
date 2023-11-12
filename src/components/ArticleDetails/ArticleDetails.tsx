import React from 'react'

import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useLocation, Link } from 'react-router-dom'

import { Wrapper } from '../Shared'

const ArticleDetails: React.FunctionComponent = () => {
  const { state } = useLocation()
  const theme = useTheme()

  return (
    <Wrapper hideLatestStarredToggle>
      <Stack px={9} spacing={3}>
        <Link to="/">Go Back</Link>
        <Stack direction="row" spacing={2}>
          <Link to={state?.url} style={{ textDecoration: 'none' }}>
            <Typography
              color={theme.palette.mode === 'light' ? '#000000' : '#FFFFFF'}
              fontFamily="Ubuntu, monospace"
              fontSize="18px"
              fontWeight={700}
              lineHeight="18px"
              letterSpacing="0em"
              textAlign="left"
            >
              {state?.title}
            </Typography>
          </Link>{' '}
          <Typography
            color={theme.palette.mode === 'light' ? '#00000080' : '#FFFFFF80'}
            fontFamily="Ubuntu, monospace"
            fontSize="12px"
            fontWeight={700}
            lineHeight="18px"
            letterSpacing="0em"
            textAlign="left"
          >
            {' '}
            by {state?.by}
          </Typography>
        </Stack>
      </Stack>
    </Wrapper>
  )
}

export default ArticleDetails

import React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

import Wrapper from './Wrapper'

const NotFound: React.FunctionComponent = () => (
  <Wrapper hideLatestStarredToggle>
    <Stack px={9}>
      <Link to="/">Go Home</Link>
      <Typography variant="h3">Page Not Found</Typography>
    </Stack>
  </Wrapper>
)

export default NotFound

import React from 'react'

import Stack from '@mui/material/Stack'

import ColorModeToggle from './ColorModeToggle'
import HeaderTitle from './HeaderTitle'
import LatestStarredToggle from './LatestStarredToggle'

const Header: React.FunctionComponent = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    p={3}
  >
    <Stack
      direction="row"
      spacing={5}
      justifyContent="center"
      alignItems="center"
    >
      <HeaderTitle />
      <LatestStarredToggle />
    </Stack>
    <ColorModeToggle />
  </Stack>
)

export default Header

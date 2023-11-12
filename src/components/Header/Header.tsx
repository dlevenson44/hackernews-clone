import React from 'react'

import Stack from '@mui/material/Stack'

import ColorModeToggle from './ColorModeToggle'
import HeaderTitle from './HeaderTitle'
import LatestStarredToggle from './LatestStarredToggle'

interface HeaderProps {
  hideLatestStarredToggle?: boolean
}

const Header: React.FunctionComponent<HeaderProps> = ({
  hideLatestStarredToggle,
}) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    p={3}
    px={9}
  >
    <Stack
      direction="row"
      spacing={5}
      justifyContent="center"
      alignItems="center"
    >
      <HeaderTitle />
      {!hideLatestStarredToggle && <LatestStarredToggle />}
    </Stack>
    <ColorModeToggle />
  </Stack>
)

export default Header

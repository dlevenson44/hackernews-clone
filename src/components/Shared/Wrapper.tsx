import React from 'react'
import type { FunctionComponent, PropsWithChildren } from 'react'

import Stack from '@mui/material/Stack'

import { Header } from '../Header'

interface WrapperProps {
  hideLatestStarredToggle?: boolean
}

const Wrapper: FunctionComponent<PropsWithChildren<WrapperProps>> = ({
  children,
  hideLatestStarredToggle,
}) => (
  <Stack
    height="100vh"
    spacing={3}
    sx={(theme) => ({
      borderTop: `4px ${theme.palette.primary.main} solid`,
    })}
  >
    <Header hideLatestStarredToggle={hideLatestStarredToggle} />
    {children}
  </Stack>
)

export default Wrapper

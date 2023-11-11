import React from 'react'

import Stack from '@mui/material/Stack'

import { Header } from './components/Header'
import { NewsFeed } from './components/NewsFeed'

function App(): React.ReactElement {
  return (
    <Stack
      height="100vh"
      spacing={3}
      sx={(theme) => ({ borderTop: `4px ${theme.palette.primary.main} solid` })}
    >
      <Header />
      <NewsFeed />
    </Stack>
  )
}

export default App

import React from 'react'

import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'

type SelectedView = 'latest' | 'starred'

const LatestStarredToggle: React.FunctionComponent = () => {
  const theme = useTheme()
  const [selectedView, setSelectedView] = React.useState<SelectedView>('latest')

  const inactiveLinkColor = React.useMemo(
    () => (theme.palette.mode === 'light' ? 'primary.dark' : 'primary.light'),
    [theme]
  )

  return (
    <Stack direction="row" spacing={1}>
      <Link
        onClick={() => setSelectedView('latest')}
        color={selectedView === 'latest' ? 'primary.main' : inactiveLinkColor}
        underline="none"
        sx={{
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: selectedView === 'latest' ? 700 : 0,
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
        onClick={() => setSelectedView('starred')}
        color={selectedView === 'starred' ? 'primary.main' : inactiveLinkColor}
        underline="none"
        sx={{
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: selectedView === 'starred' ? 700 : 0,
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

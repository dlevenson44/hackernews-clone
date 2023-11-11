import React from 'react'

import LightModeSharpIcon from '@mui/icons-material/LightModeSharp'
import NightlightRoundSharpIcon from '@mui/icons-material/NightlightRoundSharp'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'

import ColorModeContext from '../../context/color-mode-context'

const ColorModeToggle: React.FunctionComponent = () => {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)

  return (
    <IconButton onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === 'dark' ? (
        <LightModeSharpIcon />
      ) : (
        <NightlightRoundSharpIcon
          sx={(theme) => ({
            color: theme.palette.primary.dark,
            transform: 'rotate(320deg)',
          })}
        />
      )}
    </IconButton>
  )
}

export default ColorModeToggle

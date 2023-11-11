import React from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'

import App from './App'
import ColorModeContext from './context/color-mode-context'
import { store } from './redux/store'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const RootComponent = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#FE7139',
            light: '#FFFFFF',
            dark: '#000000',
          },
        },
      }),
    [mode],
  )

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Provider>
    </React.StrictMode>
  )
}

root.render(<RootComponent />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

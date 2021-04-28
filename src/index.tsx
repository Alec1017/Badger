import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Web3ReactProvider } from '@web3-react/core'
import  { ThemeProvider } from 'styled-components'

import App from './App'

import { getLibrary } from './connectors'
import { ResetStyle, ThemedGlobalStyle, theme } from './theme'

ReactDOM.render(
  <StrictMode>
    <ResetStyle />
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <ThemedGlobalStyle />
        <App />
      </ThemeProvider>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById('root')
)

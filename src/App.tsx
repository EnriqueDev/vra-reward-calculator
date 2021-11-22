import * as React from 'react'
import { CssBaseline, Switch } from '@mui/material'
import { AppBar } from 'components'
import { data } from './fixtures/api'
import { baseTransformer } from 'utils/transformers/baseTransformer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from 'modules/Auth/Auth'
import { TokenContextProvider } from 'context/token'

const App: React.FC = () => {
  const transactions = React.useMemo(() => baseTransformer(data), [])

  return (
    <React.StrictMode>
      <TokenContextProvider>
        <CssBaseline />
        <AppBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </TokenContextProvider>
    </React.StrictMode>
  )
}

export default App

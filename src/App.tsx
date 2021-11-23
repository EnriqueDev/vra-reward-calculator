import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CssBaseline } from '@mui/material'
import { AppBar } from 'components'
import Auth from 'modules/Auth/Auth'
import { TokenContextProvider } from 'context/token'
import Data from 'modules/Data/Data'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TokenContextProvider>
          <CssBaseline />
          <AppBar />
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route path="rewards" element={<Data />} />
                <Route index element={<Auth />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TokenContextProvider>
      </QueryClientProvider>
    </React.StrictMode>
  )
}

export default App

import * as React from 'react'
import { CssBaseline } from '@mui/material'
import { AppBar, DataGrid } from 'components'
import { data } from './fixtures/api'
import { baseTransformer } from 'utils/transformers/baseTransformer'

const App: React.FC = () => {
  const transactions = React.useMemo(() => baseTransformer(data), [])

  return (
    <React.StrictMode>
      <CssBaseline />
      <AppBar />
      <DataGrid data={transactions} />
    </React.StrictMode>
  )
}

export default App

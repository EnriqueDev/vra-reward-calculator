import React from 'react'
import { TokenContext } from './TokenContext'

const TokenContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = React.useState<string | undefined>()

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  )
}

export default TokenContextProvider

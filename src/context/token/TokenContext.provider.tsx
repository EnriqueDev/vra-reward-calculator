import React from 'react'
import { setTokenCookie } from 'utils/token'
import { TokenContext } from './TokenContext'

const TokenContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = React.useState<string | undefined>()

  const updateToken = React.useCallback((token: string) => {
    setTokenCookie(token)
    setToken(token)
  }, [])

  return (
    <TokenContext.Provider value={{ token, updateToken }}>
      {children}
    </TokenContext.Provider>
  )
}

export default TokenContextProvider

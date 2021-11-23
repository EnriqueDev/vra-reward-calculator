import React from 'react'

type TokenContextValue = {
  token?: string
  updateToken: (token: string) => void
}

const TokenContextValue: TokenContextValue = {
  token: undefined,
  updateToken: (_token: string) =>
    console.error(
      '>> TokenContext: Tried to set token without initializing state',
    ),
}

export const TokenContext = React.createContext(TokenContextValue)

export const useTokenContext = () => React.useContext(TokenContext)

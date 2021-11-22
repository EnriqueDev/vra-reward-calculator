import React from 'react'

type TokenContextValue = {
  token?: string
  setToken: (token: string) => void
}

const TokenContextValue: TokenContextValue = {
  token: undefined,
  setToken: (_token: string) =>
    console.error(
      '>> TokenContext: Tried to set token without initializing state',
    ),
}

export const TokenContext = React.createContext(TokenContextValue)

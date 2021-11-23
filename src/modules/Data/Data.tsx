import React from 'react'
import { DataGrid } from 'components'
import { useTokenContext } from 'context/token/TokenContext'
import { useNavigate } from 'react-router'
import { useHistoryQuery } from 'api/history'

const Data: React.FC = () => {
  const { token } = useTokenContext()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!token) {
      navigate('/', { replace: true })
    }
  }, [])

  const { data, isLoading } = useHistoryQuery(379046)

  return isLoading ? null : <DataGrid data={data!} />
}

export default Data

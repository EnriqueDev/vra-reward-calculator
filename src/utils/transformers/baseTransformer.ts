import dayjs from 'dayjs'

export type TxData = {
  id: string
  date: string
  amount: number
  currency: string
  label: string
  txHash: string | null
}

export type VeraWalletTxType =
  | 'deposits'
  | 'rewards'
  | 'stake_interests'
  | 'stakes'
  | 'withdrawal'

export type VeraWalletApiObject = {
  currency: number
  amount: string
  timestamp: string
  memo: string | null
  txhash: string | null
  fee: string | null
  type: VeraWalletTxType
  to_user: number
  transfer_to: null
  state: null
  groupkey: null
}

const allowedTypes: Partial<VeraWalletTxType>[] = ['rewards', 'stake_interests']

const koinlyLabelTransformer = (type: VeraWalletTxType) => {
  switch (type) {
    case 'rewards':
      return 'reward'
    case 'stake_interests':
      return 'reward'

    default:
      return 'UNSUPPORTED'
  }
}

export const baseTransformer = (data: VeraWalletApiObject[]): TxData[] => {
  return data
    .filter((item) => allowedTypes.includes(item.type))
    .reduce<TxData[]>((acc, item) => {
      const date = dayjs(item.timestamp)
      const newData = {
        id: item.timestamp,
        date: date.format('YYYY-MM-DD HH:mm:ss UTC'),
        amount: parseInt(item.amount, 10) / 10e17,
        currency: item.currency === 1 ? 'VRA' : 'Not supported',
        label: koinlyLabelTransformer(item.type),
        txHash: item.txhash,
      }
      acc.push(newData)
      return acc
    }, [])
}

import * as React from 'react'
import {
  DataGrid as DataGridMUI,
  GridColDef,
  GridRowsProp,
  GridToolbarExport,
} from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'date', headerName: 'Koinly Date', width: 200 },
  { field: 'amount', headerName: 'Amount', align: 'right' },
  {
    field: 'currency',
    headerName: 'Currency',
    align: 'center',
    sortable: false,
  },
  { field: 'label', headerName: 'Label', align: 'center' },
  { field: 'txHash', headerName: 'TxHash' },
]

interface IDataGridProps {
  data: GridRowsProp
}
const DataGrid: React.FC<IDataGridProps> = ({ data }) => {
  return (
    <DataGridMUI
      rows={data}
      columns={columns}
      components={{ Toolbar: GridToolbarExport }}
    />
  )
}

export default DataGrid

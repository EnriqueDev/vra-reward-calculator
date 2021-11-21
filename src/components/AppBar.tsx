import * as React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'

const MainAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            VRA REWARDS CALCULATOR
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MainAppBar

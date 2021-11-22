import { Button, Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FormEvent } from 'react'

const Auth = () => {
  const [token, setToken] = React.useState<string | undefined>(undefined)
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Verawallet token
        </Typography>
        <Box
          component="form"
          onSubmit={(e: FormEvent) => e.preventDefault()}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Verawallet Token"
            autoFocus
            value={token}
            onChange={(e) => setToken(e.target.value || undefined)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Auth

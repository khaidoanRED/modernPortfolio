import { Box, Button, Container, Link, Typography } from '@mui/material'

import { Link as RouterLink } from 'react-router-dom'

import DarkMode from './DarkMode'
const Header = () => {

  return (
    <Container maxWidth='xl'
      sx={{
        padding: '24px 0',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between'
      }}
    >
      <Box>
        <Link component={RouterLink} underline='none' color='primary' to='/'>
          <Typography variant='h5' fontSize={24} fontWeight={400}>KD.</Typography>
        </Link>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }}>
        <Link color='primary' component={RouterLink} to='/project'
          sx={{
            textDecoration: 'none',
            fontWeight: 400,
            fontSize: 18
          }}
        >Project</Link>
        <Link color='primary' component={RouterLink} to='/resume'
          sx={{
            textDecoration: 'none',
            fontWeight: 400,
            fontSize: 18
          }}
        >Resume</Link>
        <Link color='primary' component={RouterLink} to='/contact'
          sx={{
            textDecoration: 'none',
            fontWeight: 400,
            fontSize: 18
          }}
        >Contact</Link>
        <DarkMode/>
      </Box>
    </Container>
  )
}

export default Header
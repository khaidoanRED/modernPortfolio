import React from 'react'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import { Box, Container } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import Introduction from '~/components/Introduction'
function Root() {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Header/>
        <Introduction/>
        <Footer/>
      </Container>
    </Box>
  )
}

export default Root
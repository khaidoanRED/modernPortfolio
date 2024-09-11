import { Box, Container } from '@mui/material'

import Header from '~/components/Header'
import Introduction from '~/components/Introduction'
import Footer from '~/components/Footer'
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
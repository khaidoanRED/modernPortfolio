import { Box } from '@mui/material'

import Header from '~/components/Header'
import Introduction from '~/components/Introduction'
import Footer from '~/components/Footer'
import FeaturePro from '~/components/FeaturePro'
function Root() {
  return (
    <Box sx={{ scrollBehavior: 'smooth' }}>
      <Box
        sx={{
          backgroundImage: 'linear-gradient(120deg,#9845E8,#33D2FF,#DD5789)',
          position:'sticky',
          top: 0,
          left: 0,
          right: 0
        }}><Header/></Box>
      <Introduction/>
      <FeaturePro/>
      <Footer/>
    </Box>
  )
}

export default Root
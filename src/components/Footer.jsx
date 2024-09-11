import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import ProjectView from './ProjectView'
const Footer = () => {
  return (
    <Box sx={{padding: '90px 0'}}>
      <Typography
        sx={{
          textTransform: 'uppercase',
          paddingBottom: '50px'
        }}>More Project</Typography>
      <Box sx={{
        display: 'flex',
        gap: 10
      }}>
        <ProjectView
          name={'Vue Weather APP'}
          desc={'My first Vue app using OpenWeather API and fetch API with no custom libraries for requests or styling.'}
          tech={'Vue.js'}
        />
        <ProjectView
          name={'Vue Weather APP'}
          desc={'My first Vue app using OpenWeather API and fetch API with no custom libraries for requests or styling.'}
          tech={'Vue.js'}
        />
      </Box>
    </Box>
  )
}

export default Footer
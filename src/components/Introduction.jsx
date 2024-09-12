import ButtonCustom from './ButtonCustom'

import Typography from '@mui/material/Typography'
import { Box, Container, IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import SouthIcon from '@mui/icons-material/South'
function Introduction() {
  return (
    <Container maxWidth='xl'>
      <Box paddingY='120px'>
        <Typography variant='subtitle2'>
          Hey, I&lsquo;m
        </Typography>
        <Typography variant='h1' fontWeight={600} fontSize={88}
          sx={{
            backgroundImage: 'linear-gradient(76deg,#9845E8,#33D2FF,#DD5789)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            padding: '30px 0'
          }}>
          Khai Doan
        </Typography>
        <Typography textAlign='justify' fontWeight={300}>
        I&lsquo;m a software engineer based in Toronto, Canada and also a communication and journalism student.
        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
        I have been freelancing for a year now while studying at the university and I&lsquo;m manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center'
      }}>
        <Box sx={{
          display: 'flex',
          gap: 1
        }}>
          <ButtonCustom content={'Send an Email'}/>
          <ButtonCustom content={'LinkedIn'} startIcon={<LinkedInIcon/>} corner='30deg' hc='#6964DE' fc='#FCA6E9'/>
          <ButtonCustom content={'Github'} startIcon={<GitHubIcon/>} corner='120deg' hc='#D24074' fc='#6518B4'/>

        </Box>
        <Box>
          <IconButton sx={{textAlign: 'center'}}>
            <SouthIcon sx={{
              transition: 'linear 0.4s',
              '&:hover': {
                transform: 'translateY(4px)'
              }
            }}/>
          </IconButton>
        </Box>
      </Box>
    </Container>
  )
}

export default Introduction
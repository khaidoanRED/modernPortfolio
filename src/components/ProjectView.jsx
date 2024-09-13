import Typography from '@mui/material/Typography'
import ButtonCustom from './ButtonCustom'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import { Box } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
function ProjectView({ name, desc, tech, bgUrl }) {
  return (
    <Box
      // sx={{
      //   border: '1px solid transparent',
      //   '&:hover': {
      //     borderImage: 'linear-gradient(#9358F7, #10D7E2) 20'
      //   },
      //   padding: '12px'
      // }}
    >
      {
        bgUrl ? <CardMedia
          component="img"
          alt="green iguana"
          height="240px"
          image={`${bgUrl}`}
          sx={{
            borderRadius: '4px'
          }}
        /> : <Box display='none'></Box>
      }
      <Typography variant='h5' paddingBottom={'30px'}>{name}</Typography>
      <Typography variant='subtitle1' paddingBottom={'30px'} fontSize={18} maxWidth={'90%'} textAlign={'justify'}>{desc}</Typography>
      <Typography variant='subtitle2' paddingBottom={'30px'} fontSize={16} color='#6CACE4'>{tech}</Typography>
      <ButtonCustom content={'Live demo'} startIcon={<InsertLinkIcon/>}/>
    </Box>
  )
}

export default ProjectView
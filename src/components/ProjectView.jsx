import Typography from '@mui/material/Typography'
import ButtonCustom from './ButtonCustom'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
function ProjectView({ name, desc, tech }) {
  return (
    <div>
      <Typography variant='h5' paddingBottom={'30px'}>{name}</Typography>
      <Typography variant='subtitle1' paddingBottom={'30px'} maxWidth={'60%'}>{desc}</Typography>
      <Typography variant='subtitle2' paddingBottom={'30px'}>{tech}</Typography>
      <ButtonCustom content={'Live demo'} startIcon={<InsertLinkIcon/>}/>
    </div>
  )
}

export default ProjectView
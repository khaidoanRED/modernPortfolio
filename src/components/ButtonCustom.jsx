
import Button from '@mui/material/Button'
import EmailIcon from '@mui/icons-material/Email'
function ButtonCustom({ startIcon = <EmailIcon/>, content, hc = '#9358F7', fc = '#10D7E2', corner = '60deg' }) {
  return (
    <Button startIcon={startIcon}
      sx={{
        fontSize: '18px',
        backgroundImage: `linear-gradient(${corner},${hc},${fc})`,
        '-webkit-background-clip': 'border',
        padding: '8px 32px',
        textTransform: 'none',
        color: '#fff',
        transition: 'opacity 0.6s',
        '&:hover': {
          opacity: '0.6'
        }
      }}>
      {content}
    </Button>
  )
}

export default ButtonCustom

import { createTheme } from '@mui/material/styles'
const theme = createTheme({
  colorSchemes:{
    dark: {
      palette: {
        primary: {
          main: '#EBF4F6'
        },
        secondary: {
          main: '#c4c4c4'
        }
      }
    },
    light: {
      palette: {
        primary: {
          main: '#1A1A1A'
        }
      }
    }
  },
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  palette: {
    primary: {
      main: '#1a1a1a'
    }
  },
  typography: {
    fontFamily: [
      'Montserrat'
    ],
    htmlFontSize: 10,
    fontSize: 10
  }
})
export default theme
import { createTheme } from '@mui/material/styles'
import { brown, deepOrange } from '@mui/material/colors'

const aladdinTheme = createTheme({
  palette: {
    primary: {
      main: brown[900]
    },
    secondary: {
      main: deepOrange[400]
    }
  },
  typography: {
    fontFamily: 'sans serif'
  }
})

export default aladdinTheme

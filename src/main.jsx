//react
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// mui
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme.js'
//rrdv6
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

//local
import ErrorPage from './error-page.jsx'
import Root from './routes/Root.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline/>
    </ThemeProvider>
  </StrictMode>
)

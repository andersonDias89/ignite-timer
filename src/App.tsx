import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './components/Router'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
        <h1>Ola mundo</h1>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

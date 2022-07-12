import GlobalStyle from "./styles/GlobalStyle"
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <h1>Ola mundo</h1>
    </ThemeProvider>
  )
}

export default App

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">Cofee Delivery</div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

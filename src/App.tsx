import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AddressAndPaymentContextProvider } from './contexts/AddressAndPaymentContext'
import { CoffeesContextProvider } from './contexts/CoffeesContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <AddressAndPaymentContextProvider>
            <Router />
          </AddressAndPaymentContextProvider>
        </CoffeesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

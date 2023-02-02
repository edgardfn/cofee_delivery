import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }

    body {
        background: ${(props) => props.theme.white};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antiliased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    header {
        font-family: 'Baloo 2', cursive;
        
    }
`

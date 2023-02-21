import styled, { css } from 'styled-components'

interface ButtonProps {
  isFocus: true | false
}

export const PaymentContainer = styled.div`
  margin-top: 1rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const TitleContainer = styled.div`
  color: ${(props) => props.theme.purple};

  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ContainerContentText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3rem;

  color: ${(props) => props.theme['base-subtitle']};
`

export const TextContainer = styled.div`
  margin-left: calc(22px + 0.5rem);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3rem;

  color: ${(props) => props.theme['base-text']};
`

export const OptionsButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;

  margin-top: 2rem;
`

export const PaymentMethodButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 6px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.6rem;

  color: ${(props) => props.theme['base-text']};

  line-height: 0;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }

  &:focus {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }

  ${(props) => {
    if (props.isFocus)
      return `
        background-color: ${props.theme['purple-light']};
        border: 1px solid ${props.theme.purple};
      `
  }}
`

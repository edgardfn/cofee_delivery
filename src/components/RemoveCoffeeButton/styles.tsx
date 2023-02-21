import styled from 'styled-components'

export const RemoveCoffeeButtonContainer = styled.button`
  height: 2rem;
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 6px;
  padding: 0px 8px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.6rem;
  color: ${(props) => props.theme['base-text']};

  display: flex;
  align-items: center;
  gap: 0.25rem;

  line-height: 0;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`

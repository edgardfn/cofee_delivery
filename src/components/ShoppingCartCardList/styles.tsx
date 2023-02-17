import styled from 'styled-components'

export const ShoppingCartCardListContainer = styled.div`
  /* padding: 8px 4px; */
  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  padding: 1.5rem 0;
`

export const MainContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const ImageCoffee = styled.img`
  width: 4rem;
  height: 4rem;
`

export const MainInformationCoffee = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`

export const NameCoffee = styled.div``

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button:first-of-type {
    height: 2rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
  }
`

export const PriceContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.3rem;

  color: ${(props) => props.theme['base-text']};

  height: max-content;
  display: flex;
  align-items: flex-start;
`

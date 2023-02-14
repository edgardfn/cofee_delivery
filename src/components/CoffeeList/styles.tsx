import styled from 'styled-components'

export const CoffeeListContainer = styled.main``

export const TitleText = styled.main`
  padding: 2rem 0;

  font-family: 'Baloo 2', cursive;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 2.6rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeeListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

import styled from 'styled-components'

export const CartContainer = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 57% 43%;
  gap: 2rem;
  max-width: 90rem;
`

export const ContainerCompleteYourOrder = styled.div`
  font-family: 'Baloo 2', cursive;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3rem;

  color: ${(props) => props.theme['base-subtitle']};
`

export const ContainerSelectedCoffees = styled.div`
  font-family: 'Baloo 2', cursive;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3rem;

  color: ${(props) => props.theme['base-subtitle']};
`

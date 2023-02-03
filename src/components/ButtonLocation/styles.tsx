import styled from 'styled-components'

export const ButtonLocationContainer = styled.main`
  height: 100%;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 0.25rem;
`

export const ContainerCityAndState = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: ${(props) => props.theme['purple-dark']};
`

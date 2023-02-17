import styled from 'styled-components'

type TypeContainerNumberShopping = {
  visible: true | false
}

export const ButtonCartContainer = styled.button`
  padding: 0.5rem;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme['yellow-dark']};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  // &:hover {
  //   background-color: ${(props) => props.theme.purple};
  //   color: ${(props) => props.theme.white};
  // }

  position: relative;
`

export const ContainerNumberShopping = styled.div<TypeContainerNumberShopping>`
  border-radius: 50%;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  width: 1.25rem;
  height: 1.25rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1rem;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -0.625rem;
  right: -0.625rem;
`

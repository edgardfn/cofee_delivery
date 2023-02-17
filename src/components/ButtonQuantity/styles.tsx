import styled from 'styled-components'

export const ButtonQuantityContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  margin-right: 0.5rem;
`

export const ContainerButtonSubtractItem = styled.button`
  border: none;
  height: 100%;
  background-color: transparent;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  color: ${(props) => props.theme.purple};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const ContainerQuantityContent = styled.div`
  width: max-content;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3rem;

  color: ${(props) => props.theme['base-title']};
`

export const ContainerButtonAddItem = styled.button`
  /* height: 100%; */
  border: none;
  background-color: transparent;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  color: ${(props) => props.theme.purple};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

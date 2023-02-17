import styled from 'styled-components'

export const CardCoffeeContainer = styled.main`
  width: 16rem;
  height: 19.3rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  margin-bottom: 2.5rem;
`

export const ContainerCoffeeImage = styled.div`
  width: 7.5rem;
  height: 7rem;
  margin: 0 auto;

  position: relative;

  img {
    position: absolute;
    top: -1.25rem;
  }
`

export const ContainerTags = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding-top: 0.5rem;
  padding-bottom: 1rem;
`

export const ContentContainerTags = styled.div`
  text-transform: uppercase;
  height: max-content;
  border-radius: 100px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 0.8rem;
  color: ${(props) => props.theme['yellow-dark']};

  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme['yellow-light']};
  width: max-content;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerTitle = styled.div`
  font-family: 'Baloo 2', cursive;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.625rem;

  color: ${(props) => props.theme['base-subtitle']};

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`

export const ContainerDescription = styled.div`
  padding: 0 1.25rem;
  text-align: center;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.125rem;

  color: ${(props) => props.theme['base-label']};

  margin-bottom: 2rem;
`

export const ContainerBuy = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.4rem;

  display: flex;
`

export const ContainerValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-right: 1.4rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.138rem;

  color: ${(props) => props.theme['base-text']};

  div {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 24px;
    line-height: 1.95rem;
  }
`

export const ContainerQuantity = styled.div``

export const ContainerIconCart = styled.div`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-dark']};
  padding: 0.5rem;
  width: max-content;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`

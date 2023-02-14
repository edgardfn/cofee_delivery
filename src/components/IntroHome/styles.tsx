import styled from 'styled-components'

type TypeIconContainer = {
  backgroundColor: 'yellow' | 'purple' | 'base-text' | 'yellow-dark'
}

export const IntroContainer = styled.div`
  max-height: 34rem;
  padding: 6rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const IntroContainerMain = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TitleContainer = styled.div`
  color: ${(props) => props.theme['base-title']};
  font-family: 'Baloo 2', cursive;
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  line-height: 3.8rem;
`

export const TextSecondaryContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.6rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  align-content: end;
  height: 100%;
`

export const ContentIconsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  height: max-content;

  padding: 1.25rem 0;
`

export const IconContainer = styled.div<TypeIconContainer>`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme[props.backgroundColor]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextIconsContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3rem;

  display: flex;
  align-items: center;
`

export const IntroContainerImage = styled.div`
  padding-left: 3.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;

  img {
    max-height: 360px;
    width: 100%;
    /* background-position: center;
    background-size: cover; */
  }
`

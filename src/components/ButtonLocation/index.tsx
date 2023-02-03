import { ButtonLocationContainer, ContainerCityAndState } from './styles'
import iconLocation from '../../assets/iconLocation.svg'

interface PropsButtonLocation {
  city: string
  state: string
}
export function ButtonLocation({ city, state }: PropsButtonLocation) {
  return (
    <ButtonLocationContainer>
      <img src={iconLocation} alt="icon-location-maps" />
      <ContainerCityAndState>
        {city}/{state}
      </ContainerCityAndState>
    </ButtonLocationContainer>
  )
}

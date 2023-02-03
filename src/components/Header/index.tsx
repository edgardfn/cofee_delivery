import { CityAndCartContainer, HeaderContainer, LogoContainer } from './styles'
import logoCofeeDelivery from '../../assets/logo.svg'
import { ButtonLocation } from '../ButtonLocation'
import { ButtonCart } from '../ButtonCart'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logoCofeeDelivery} alt="image-cofee-and-name-company" />
      </LogoContainer>
      <CityAndCartContainer>
        <ButtonLocation city="São Paulo" state="SP" />
        <ButtonCart />
      </CityAndCartContainer>
    </HeaderContainer>
  )
}

import { CityAndCartContainer, HeaderContainer, LogoContainer } from './styles'
import logoCofeeDelivery from '../../assets/logo.svg'
import { ButtonLocation } from '../ButtonLocation'
import { ButtonCart } from '../ButtonCart'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logoCofeeDelivery} alt="image-cofee-and-name-company" />
      </LogoContainer>
      <CityAndCartContainer>
        <ButtonLocation city="São Paulo" state="SP" />
        <nav>
          <NavLink to="/checkout" title="Carrinho de Compras">
            <ButtonCart />
          </NavLink>
        </nav>
      </CityAndCartContainer>
    </HeaderContainer>
  )
}

import { CityAndCartContainer, HeaderContainer, LogoContainer } from './styles'
import logoCofeeDelivery from '../../assets/logo.svg'
import { ButtonLocation } from '../ButtonLocation'
import { ButtonCart } from '../ButtonCart'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AddressAndPaymentContext } from '../../contexts/AddressAndPaymentContext'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <nav>
          <NavLink to="/" title="Home">
            <img src={logoCofeeDelivery} alt="image-cofee-and-name-company" />
          </NavLink>
        </nav>
      </LogoContainer>
      <CityAndCartContainer>
        <ButtonLocation city="São Paulo" state="SP" />
        <ButtonCart />
      </CityAndCartContainer>
    </HeaderContainer>
  )
}

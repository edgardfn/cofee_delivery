import { ButtonCartContainer, ContainerNumberShopping } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function ButtonCart() {
  return (
    <ButtonCartContainer>
      <nav>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
      <ContainerNumberShopping visible={true}>{3}</ContainerNumberShopping>
    </ButtonCartContainer>
  )
}

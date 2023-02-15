import { ButtonCartContainer, ContainerNumberShopping } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function ButtonCart() {
  const { coffees, NumberTotalCofeesBought } = useContext(CoffeesContext)

  return (
    <ButtonCartContainer>
      <nav>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
      <ContainerNumberShopping visible={true}>
        {NumberTotalCofeesBought}
      </ContainerNumberShopping>
    </ButtonCartContainer>
  )
}

import { ButtonCartContainer, ContainerNumberShopping } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { AddressAndPaymentContext } from '../../contexts/AddressAndPaymentContext'

export function ButtonCart() {
  const { coffees, NumberTotalCofeesBought } = useContext(CoffeesContext)
  const { routeIfThereAreSelectedCoffees, coffeesFilteredByExistingQuantity } =
    useContext(AddressAndPaymentContext)

  let makeTheNumberOfItemsVisible = false
  if (coffeesFilteredByExistingQuantity.length > 0) {
    makeTheNumberOfItemsVisible = true
  }

  return (
    <ButtonCartContainer>
      <nav>
        <NavLink to={routeIfThereAreSelectedCoffees} title="Checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
      <ContainerNumberShopping visible={makeTheNumberOfItemsVisible}>
        {NumberTotalCofeesBought}
      </ContainerNumberShopping>
    </ButtonCartContainer>
  )
}

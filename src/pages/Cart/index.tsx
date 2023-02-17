import { DeliveryAddress } from '../../components/DeliveryAddress'
import { ListOfSelectedCoffeesAndPrice } from '../../components/ListOfSelectedCoffeesAndPrices'
import { Payment } from '../../components/Payment'
import {
  CartContainer,
  ContainerCompleteYourOrder,
  ContainerSelectedCoffees,
} from './styles'

export function Cart() {
  return (
    <CartContainer>
      <ContainerCompleteYourOrder>
        Complete seu Pedido
        <DeliveryAddress />
        <Payment />
      </ContainerCompleteYourOrder>
      <ContainerSelectedCoffees>
        Cafés Selecionados
        <ListOfSelectedCoffeesAndPrice />
      </ContainerSelectedCoffees>
    </CartContainer>
  )
}

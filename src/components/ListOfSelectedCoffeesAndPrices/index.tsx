import { useContext } from 'react'
import { AddressAndPaymentContext } from '../../contexts/AddressAndPaymentContext'
import { ShoppingCartCardList } from '../ShoppingCartCardList'
import {
  ConfirmButton,
  ConfirmButtonContainer,
  DeliveryAmountContainer,
  FinalOrderTotalContainer,
  FinalValuesContainer,
  MainContainer,
  TextDeliveryAmountContainer,
  TextFinalOrderTotalContainer,
  TextTotalNumberContainer,
  TotalNumberContainer,
  ValueDeliveryContainer,
  ValueFinalOrderTotalContainer,
  ValueTotalNumberContainer,
} from './styles'

export function ListOfSelectedCoffeesAndPrice() {
  const {
    coffeesFilteredByExistingQuantity,
    valueOfAllCoffees,
    deliveryPrice,
    finalOrderTotal,
  } = useContext(AddressAndPaymentContext)
  return (
    <MainContainer>
      {coffeesFilteredByExistingQuantity.map((coffee) => {
        return <ShoppingCartCardList key={coffee.id} coffee={coffee} />
      })}
      <FinalValuesContainer>
        <TotalNumberContainer>
          <TextTotalNumberContainer>Total de Itens</TextTotalNumberContainer>
          <ValueTotalNumberContainer>
            R${' '}
            {valueOfAllCoffees.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </ValueTotalNumberContainer>
        </TotalNumberContainer>
        <DeliveryAmountContainer>
          <TextDeliveryAmountContainer>Entrega</TextDeliveryAmountContainer>
          <ValueDeliveryContainer>
            R${' '}
            {deliveryPrice.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </ValueDeliveryContainer>
        </DeliveryAmountContainer>
        <FinalOrderTotalContainer>
          <TextFinalOrderTotalContainer>Total</TextFinalOrderTotalContainer>
          <ValueFinalOrderTotalContainer>
            R${' '}
            {finalOrderTotal.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </ValueFinalOrderTotalContainer>
        </FinalOrderTotalContainer>
      </FinalValuesContainer>
      <ConfirmButtonContainer>
        <ConfirmButton>confirmar pedido</ConfirmButton>
      </ConfirmButtonContainer>
    </MainContainer>
  )
}

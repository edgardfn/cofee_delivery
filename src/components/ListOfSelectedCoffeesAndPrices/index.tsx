import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddressAndPaymentContext } from '../../contexts/AddressAndPaymentContext'
import { CoffeesContext } from '../../contexts/CoffeesContext'
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
    disableConfirmOrderButton,
  } = useContext(AddressAndPaymentContext)
  const navigate = useNavigate()

  const handleClickConfirmOrder = () => {
    console.log('caiu aqui na função')
    navigate('/success')
  }

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
        <ConfirmButton
          disabled={disableConfirmOrderButton}
          onClick={handleClickConfirmOrder}
        >
          confirmar pedido
        </ConfirmButton>
      </ConfirmButtonContainer>
    </MainContainer>
  )
}

import { useContext, useEffect } from 'react'
import { AddressAndPaymentContext } from '../../contexts/AddressAndPaymentContext'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import {
  ContentContainer,
  DataContainer,
  DeliveryForecastContainer,
  DeliveryInformationContainer,
  ImageContainer,
  ImageDeliveryForecastContainer,
  ImageDeliveryInformationContainer,
  ImagePaymentContainer,
  PaymentContainer,
  SuccessContainer,
  SuccessSubTitleContainer,
  SuccessTitleContainer,
  TextDeliveryForecastContainer,
  TextDeliveryInformationContainer,
  TextPaymentContainer,
} from './styles'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import illustration from './../../assets/illustration.svg'

export function Success() {
  const { resetQuantityAllCoffees } = useContext(CoffeesContext)
  const { deliveryAddress, formOfPayment } = useContext(
    AddressAndPaymentContext,
  )

  useEffect(() => {
    resetQuantityAllCoffees()
  }, [])

  let paymentMethodText = ''
  switch (formOfPayment.formOfPayment) {
    case 'credito':
      paymentMethodText = 'Cartão de Crédito'
      break
    case 'debito':
      paymentMethodText = 'Cartão de Débito'
      break
    case 'dinheiro':
      paymentMethodText = 'Dinheiro'
      break
  }

  return (
    <SuccessContainer>
      <SuccessTitleContainer>Uhu! Pedido confirmado</SuccessTitleContainer>
      <SuccessSubTitleContainer>
        Agora é só aguardar que logo o café chegará até você
      </SuccessSubTitleContainer>
      <ContentContainer>
        <DataContainer>
          <DeliveryInformationContainer>
            <ImageDeliveryInformationContainer>
              <MapPin size={16} weight={'fill'} />
            </ImageDeliveryInformationContainer>
            <TextDeliveryInformationContainer>
              Entrega em{' '}
              <b>
                {deliveryAddress.logradouro}, {deliveryAddress.number}
              </b>
              <br></br>
              {deliveryAddress.bairro} - {deliveryAddress.localidade},{' '}
              {deliveryAddress.uf}
            </TextDeliveryInformationContainer>
          </DeliveryInformationContainer>
          <DeliveryForecastContainer>
            <ImageDeliveryForecastContainer>
              <Timer size={16} weight={'fill'} />
            </ImageDeliveryForecastContainer>
            <TextDeliveryForecastContainer>
              Previsão de entrega
              <br />
              <b>20 min - 30 min</b>
            </TextDeliveryForecastContainer>
          </DeliveryForecastContainer>
          <PaymentContainer>
            <ImagePaymentContainer>
              <CurrencyDollar size={16} weight={'regular'} />
            </ImagePaymentContainer>
            <TextPaymentContainer>
              Pagamento na entrega
              <br />
              <b>{paymentMethodText}</b>
            </TextPaymentContainer>
          </PaymentContainer>
        </DataContainer>
        <ImageContainer>
          <img src={illustration} alt="" />
        </ImageContainer>
      </ContentContainer>
    </SuccessContainer>
  )
}

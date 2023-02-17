import {
  ContainerContentText,
  OptionsButtonsContainer,
  PaymentContainer,
  PaymentMethodButton,
  TextContainer,
  TitleContainer,
} from './styles'
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useContext } from 'react'
import { AddressAndPaymentContext } from '../../contexts/AddressAndPaymentContext'
import { payment } from '../../reducers/addressAndPayment/reducer'

export function Payment() {
  const { addFormOfPayment } = useContext(AddressAndPaymentContext)

  const handleClickPaymentMethod = (paymentMethod: payment) => {
    addFormOfPayment(paymentMethod)
  }

  return (
    <PaymentContainer>
      <TitleContainer>
        <CurrencyDollar weight="regular" size={22} />
        <ContainerContentText>Pagamento</ContainerContentText>
      </TitleContainer>
      <TextContainer>
        O pagamento é feito na entrega. Escolha a forma que deseja pagar
      </TextContainer>
      <OptionsButtonsContainer>
        <PaymentMethodButton
          onClick={() => handleClickPaymentMethod({ formOfPayment: 'credito' })}
        >
          <CreditCard weight="regular" size={16} />
          CARTÃO DE CRÉDITO
        </PaymentMethodButton>
        <PaymentMethodButton
          onClick={() => handleClickPaymentMethod({ formOfPayment: 'debito' })}
        >
          <Bank weight="regular" size={16} />
          CARTÃO DE DÉBITO
        </PaymentMethodButton>
        <PaymentMethodButton
          onClick={() =>
            handleClickPaymentMethod({ formOfPayment: 'dinheiro' })
          }
        >
          <Money weight="regular" size={16} />
          DINHEIRO
        </PaymentMethodButton>
      </OptionsButtonsContainer>
    </PaymentContainer>
  )
}

import { ActionTypes } from './actions'

export interface address {
  bairro: string
  complemento?: string
  localidade: string
  logradouro: string
  uf: string
  cep: string
}

export interface payment {
  formOfPayment: 'credito' | 'debito' | 'dinheiro'
}

interface AddressAndPaymentState {
  address: address
  formOfPayment: payment
}

export function addressAndPaymentReducer(
  state: AddressAndPaymentState,
  action: any,
) {
  switch (action.type) {
    case ActionTypes.ADD_ADDRESS: {
      return {
        ...state,
        address: action.payload.newAddress,
      }
    }

    case ActionTypes.ADD_FORM_OF_PAYMENT: {
      return {
        ...state,
        formOfPayment: action.payload.formOfPayment,
      }
    }

    default:
      return state
  }
}

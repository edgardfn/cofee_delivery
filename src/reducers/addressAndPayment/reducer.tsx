import { ActionTypes } from './actions'

export interface address {
  bairro: string
  complemento?: string
  localidade: string
  logradouro: string
  uf: string
  cep: string
  number: string
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

    case ActionTypes.ADD_HOUSE_NUMBER_IN_ADDRESS: {
      return {
        ...state,
        address: { ...state.address, number: action.payload.houseNumber },
      }
    }

    case ActionTypes.ADD_COMPLEMENT_IN_ADDRESS: {
      return {
        ...state,
        address: { ...state.address, complemento: action.payload.houseNumber },
      }
    }

    default:
      return state
  }
}

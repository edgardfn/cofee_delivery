import { address, payment } from './reducer'

export enum ActionTypes {
  ADD_ADDRESS = 'ADD_ADDRESS',
  ADD_FORM_OF_PAYMENT = 'ADD_FORM_OF_PAYMENT',
  // ALTER_CEP_FOUND = 'ALTER_CEP_FOUND',
}

export function addAddressAction(newAddress: address) {
  return {
    type: ActionTypes.ADD_ADDRESS,
    payload: {
      newAddress,
    },
  }
}

export function addFormOfPaymentAction(formOfPayment: payment) {
  return {
    type: ActionTypes.ADD_FORM_OF_PAYMENT,
    payload: {
      formOfPayment,
    },
  }
}

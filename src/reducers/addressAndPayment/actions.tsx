import { address, payment } from './reducer'

export enum ActionTypes {
  ADD_ADDRESS = 'ADD_ADDRESS',
  ADD_FORM_OF_PAYMENT = 'ADD_FORM_OF_PAYMENT',
  ADD_HOUSE_NUMBER_IN_ADDRESS = 'ADD_HOUSE_NUMBER_IN_ADDRESS',
  ADD_COMPLEMENT_IN_ADDRESS = 'ADD_COMPLEMENT_IN_ADDRESS',
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

export function addHouseNumberInAddressAction(houseNumber: string) {
  return {
    type: ActionTypes.ADD_HOUSE_NUMBER_IN_ADDRESS,
    payload: {
      houseNumber,
    },
  }
}

export function addComplementInAddressAction(complement: string) {
  return {
    type: ActionTypes.ADD_COMPLEMENT_IN_ADDRESS,
    payload: {
      complement,
    },
  }
}

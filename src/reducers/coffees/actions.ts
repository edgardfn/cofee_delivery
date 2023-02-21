import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  RESET_QUANTITY_OF_SPECIFIC_COFFEE = 'RESET_QUANTITY_OF_SPECIFIC_COFFEE',
  RESET_QUANTITY_ALL_COFFEES = 'RESET_QUANTITY_ALL_COFFEES',
}

export function addCoffeeAction(idCoffee: string) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      idCoffee,
    },
  }
}

export function removeCoffeeAction(idCoffee: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      idCoffee,
    },
  }
}

export function resetQuantityOfSpecificCoffeeAction(idCoffee: string) {
  return {
    type: ActionTypes.RESET_QUANTITY_OF_SPECIFIC_COFFEE,
    payload: {
      idCoffee,
    },
  }
}

export function resetQuantityAllsCoffeesAction() {
  return {
    type: ActionTypes.RESET_QUANTITY_ALL_COFFEES,
    payload: {},
  }
}

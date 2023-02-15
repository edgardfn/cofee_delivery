export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

export function addCoffeeAction(idCoffee: string) {
  console.log('aquiiiiii ====', idCoffee)
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

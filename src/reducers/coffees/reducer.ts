import { ActionTypes } from './actions'

export interface Coffee {
  id: string
  image: string
  tags: string[]
  name: string
  description: string
  price: number
  quantity: number
}

interface CoffeesState {
  coffees: Coffee[]
}

export function coffeesReducer(state: CoffeesState, action: any) {
  // console.log(state)
  // console.log(action)
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      // console.log('ActionTypes.ADD_COFFEE')
      return {
        ...state,
        coffees: state.coffees.map((coffee) => {
          // console.log(coffee.id)
          // console.log(action.payload.selectedCoffeeId)
          // console.log(coffee.id === action.payload.idCoffee)
          if (coffee.id === action.payload.idCoffee) {
            // console.log({ ...coffee, quantity: coffee.quantity + 1 })
            return { ...coffee, quantity: coffee.quantity + 1 }
          } else {
            return coffee
          }
        }),
      }
    }

    case ActionTypes.REMOVE_COFFEE: {
      // console.log('ActionTypes.REMOVE_COFFEE')
      return {
        ...state,
        coffees: state.coffees.map((coffee) => {
          if (coffee.id === action.payload.idCoffee) {
            return { ...coffee, quantity: coffee.quantity - 1 }
          } else {
            return coffee
          }
        }),
      }
    }
    default:
      // console.log('nenhum dos dois')
      return state
  }
}

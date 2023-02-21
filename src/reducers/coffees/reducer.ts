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
  switch (action.type) {
    case ActionTypes.ADD_COFFEE: {
      return {
        ...state,
        coffees: state.coffees.map((coffee) => {
          if (coffee.id === action.payload.idCoffee) {
            return { ...coffee, quantity: coffee.quantity + 1 }
          } else {
            return coffee
          }
        }),
      }
    }

    case ActionTypes.REMOVE_COFFEE: {
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

    case ActionTypes.RESET_QUANTITY_OF_SPECIFIC_COFFEE: {
      return {
        ...state,
        coffees: state.coffees.map((coffee) => {
          if (coffee.id === action.payload.idCoffee) {
            return { ...coffee, quantity: 0 }
          } else {
            return coffee
          }
        }),
      }
    }

    case ActionTypes.RESET_QUANTITY_ALL_COFFEES: {
      return {
        ...state,
        coffees: state.coffees.map((coffee) => {
          if (coffee.quantity > 0) {
            return { ...coffee, quantity: 0 }
          } else {
            return coffee
          }
        }),
      }
    }

    default:
      return state
  }
}

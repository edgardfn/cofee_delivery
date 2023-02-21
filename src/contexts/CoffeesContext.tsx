import { createContext, ReactNode, useReducer, useState } from 'react'
import { Coffee } from '../components/CoffeeList'
import { v4 as uuidv4 } from 'uuid'
import expressoTradicional from '../assets/expressoTradicional.svg'
import expressoAmericano from '../assets/expressoAmericado.svg'
import expressoCremoso from '../assets/expressoCremoso.svg'
import expressoGelado from '../assets/expressoGelado.svg'
import cafeComLeite from '../assets/cafeComLeite.svg'
import latte from '../assets/latte.svg'
import cappucino from '../assets/capucciono.svg'
import macchiato from '../assets/macchiato.svg'
import mocaccino from '../assets/mocaccino.svg'
import chocolateQuente from '../assets/chocolateQuente.svg'
import cubano from '../assets/Cubano.svg'
import havaiano from '../assets/havaiano.svg'
import arabe from '../assets/arabe.svg'
import irlandes from '../assets/irlandes.svg'
import { coffeesReducer } from '../reducers/coffees/reducer'
import {
  addCoffeeAction,
  removeCoffeeAction,
  resetQuantityAllsCoffeesAction,
  resetQuantityOfSpecificCoffeeAction,
} from '../reducers/coffees/actions'

interface CoffeesContextType {
  coffees: Coffee[]
  addItemToSelectedCoffee: (idCoffeeSelected: string) => void
  removeItemToSelectedCoffee: (idCoffeeSelected: string) => void
  NumberTotalCofeesBought: number
  resetQuantityToSelectedCoffee: (idCoffeeSelected: string) => void
  resetQuantityAllCoffees: () => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffees: [
      {
        id: uuidv4(),
        image: expressoTradicional,
        tags: ['tradicional'],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.99,
        quantity: 0,
      },
      {
        id: uuidv4(),
        image: expressoAmericano,
        tags: ['tradicional'],
        name: 'Expresso Americado',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 8.5,
        quantity: 0,
      },
      {
        id: uuidv4(),
        image: expressoCremoso,
        tags: ['tradicional'],
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 8.0,
        quantity: 0,
      },
      {
        id: uuidv4(),
        image: expressoGelado,
        tags: ['tradicional', 'gelado'],
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 7.5,
        quantity: 0,
      },
      {
        id: uuidv4(),
        image: cafeComLeite,
        tags: ['tradicional', 'com leite'],
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 7.0,
        quantity: 0,
      },
      {
        id: uuidv4(),
        image: latte,
        tags: ['tradicional', 'com leite'],
        name: 'Latte',
        description:
          'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 6.0,
        quantity: 0,
      },
      {
        id: uuidv4(),
        image: cappucino,
        tags: ['tradicional', 'com leite'],
        name: 'Capuccino',
        description:
          'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 6.5,
        quantity: 0,
      },
      {
        id: uuidv4(),
        image: macchiato,
        tags: ['tradicional', 'com leite'],
        name: 'Macchiato',
        description:
          'Café expresso misturado com um pouco de leite quente e espuma',
        price: 8.2,
        quantity: 0,
      },
      {
        id: uuidv4(),
        image: mocaccino,
        tags: ['tradicional', 'com leite'],
        name: 'Mocaccino',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.3,
        quantity: 0,
      },
      {
        id: uuidv4(),
        image: chocolateQuente,
        tags: ['especial', 'com leite'],
        name: 'Chocolate Quente',
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 5.0,
        quantity: 0,
      },
      {
        id: uuidv4(),
        image: cubano,
        tags: ['especial', 'alcoólico', 'gelado'],
        name: 'Cubano',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 8.7,
        quantity: 0,
      },
      {
        id: uuidv4(),
        image: havaiano,
        tags: ['especial'],
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 10.3,
        quantity: 0,
      },
      {
        id: uuidv4(),
        image: arabe,
        tags: ['especial'],
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.6,
        quantity: 0,
      },
      {
        id: uuidv4(),
        image: irlandes,
        tags: ['especial', 'alcoólico'],
        name: 'Irlandês',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 7.4,
        quantity: 0,
      },
    ],
  })

  const { coffees } = coffeesState

  let NumberTotalCofeesBought = 0
  coffees.forEach((coffee: Coffee) => {
    NumberTotalCofeesBought = NumberTotalCofeesBought + coffee.quantity
  })

  function addItemToSelectedCoffee(id: string) {
    dispatch(addCoffeeAction(id))
  }

  function removeItemToSelectedCoffee(id: string) {
    dispatch(removeCoffeeAction(id))
  }

  function resetQuantityToSelectedCoffee(id: string) {
    dispatch(resetQuantityOfSpecificCoffeeAction(id))
  }

  function resetQuantityAllCoffees() {
    dispatch(resetQuantityAllsCoffeesAction())
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        addItemToSelectedCoffee,
        removeItemToSelectedCoffee,
        NumberTotalCofeesBought,
        resetQuantityToSelectedCoffee,
        resetQuantityAllCoffees,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}

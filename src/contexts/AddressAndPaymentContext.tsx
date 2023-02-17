import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from 'react'
import {
  address,
  addressAndPaymentReducer,
  payment,
} from '../reducers/addressAndPayment/reducer'
import {
  addAddressAction,
  addFormOfPaymentAction,
} from '../reducers/addressAndPayment/actions'
import { CoffeesContext } from './CoffeesContext'
import { Coffee } from '../reducers/coffees/reducer'

interface AddressAndPaymentContextType {
  deliveryAddress: address
  formOfPayment: payment
  cep: string
  addNewValidZipCode: (cep: string) => void
  coffeesFilteredByExistingQuantity: Coffee[]
  addAddress: (data: address) => void
  addFormOfPayment: (formOfPayment: payment) => void
  valueOfAllCoffees: number
  deliveryPrice: number
  finalOrderTotal: number
}

export const AddressAndPaymentContext = createContext(
  {} as AddressAndPaymentContextType,
)

interface AddressAndPaymentContextTypeContextProviderProps {
  children: ReactNode
}

export function AddressAndPaymentContextProvider({
  children,
}: AddressAndPaymentContextTypeContextProviderProps) {
  const { coffees } = useContext(CoffeesContext)
  const [cep, setCep] = useState('')
  const [addressAndPaymentState, dispatch] = useReducer(
    addressAndPaymentReducer,
    {
      address: {
        bairro: '',
        complemento: '',
        localidade: '',
        logradouro: '',
        uf: '',
        cep: '',
      },
      formOfPayment: '',
    },
  )

  const { address, formOfPayment } = addressAndPaymentState

  function addAddress(data: address) {
    dispatch(addAddressAction(data))
  }

  function addFormOfPayment(formOfPayment: payment) {
    dispatch(addFormOfPaymentAction(formOfPayment))
  }

  function addNewValidZipCode(cep: string) {
    setCep(cep)
  }

  const coffeesFilteredByExistingQuantity = coffees.filter(
    (coffee) => coffee.quantity > 0,
  )

  let valueOfAllCoffees = 0
  coffeesFilteredByExistingQuantity.forEach((coffee) => {
    if (coffee.quantity > 0) {
      const currentCoffeePrices = coffee.quantity * coffee.price
      valueOfAllCoffees = valueOfAllCoffees + currentCoffeePrices
    }
  })

  const deliveryPrice = 3.5

  const finalOrderTotal = valueOfAllCoffees + deliveryPrice

  return (
    <AddressAndPaymentContext.Provider
      value={{
        deliveryAddress: address,
        addAddress,

        formOfPayment,
        addFormOfPayment,

        cep,
        addNewValidZipCode,

        coffeesFilteredByExistingQuantity,
        valueOfAllCoffees,
        deliveryPrice,
        finalOrderTotal,
      }}
    >
      {children}
    </AddressAndPaymentContext.Provider>
  )
}

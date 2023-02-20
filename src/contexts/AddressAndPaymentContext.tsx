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
  addComplementInAddressAction,
  addFormOfPaymentAction,
  addHouseNumberInAddressAction,
} from '../reducers/addressAndPayment/actions'
import { CoffeesContext } from './CoffeesContext'
import { Coffee } from '../reducers/coffees/reducer'
import axios from 'axios'
import { redirect } from 'react-router-dom'

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
  cepFound: true | false
  addHouseNumberInAddress: (numero: string) => void
  addComplementInAddress: (complement: string) => void
  disableConfirmOrderButton: true | false
  routeIfThereAreSelectedCoffees: string
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
  const [cepFound, setCepFound] = useState(false)
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
        number: '',
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

  function addHouseNumberInAddress(numero: string) {
    console.log(numero)
    dispatch(addHouseNumberInAddressAction(numero))
  }

  function addComplementInAddress(complement: string) {
    dispatch(addComplementInAddressAction(complement))
  }

  if (!cepFound && cep.length === 9) {
    const cepWithoutSpecialCharacter = cep.replace('-', '')
    axios
      .get(`https://viacep.com.br/ws/${cepWithoutSpecialCharacter}/json/`)
      .then((res) => {
        const data = res.data
        if ('erro' in data) {
          console.log('cep não encontrado.')
        } else {
          let addressData: address = data
          addressData = { ...addressData, number: '' }
          addAddress(addressData)
          setCepFound(true)
        }
      })
  }

  if (cepFound && cep.length < 9) {
    addAddress({
      bairro: '',
      complemento: '',
      localidade: '',
      logradouro: '',
      uf: '',
      cep: '',
      number: '',
    })

    setCepFound(false)
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

  let routeIfThereAreSelectedCoffees = '/checkout'
  if (coffeesFilteredByExistingQuantity.length === 0) {
    routeIfThereAreSelectedCoffees = '#'
  }

  const deliveryPrice = 3.5

  const finalOrderTotal = valueOfAllCoffees + deliveryPrice

  let disableConfirmOrderButton = true

  if (
    address.number === '' ||
    formOfPayment.formOfPayment === undefined ||
    coffeesFilteredByExistingQuantity.length === 0
  ) {
    disableConfirmOrderButton = true
  } else {
    disableConfirmOrderButton = false
  }

  return (
    <AddressAndPaymentContext.Provider
      value={{
        deliveryAddress: address,
        addAddress,

        formOfPayment,
        addFormOfPayment,

        cep,
        addNewValidZipCode,
        cepFound,

        coffeesFilteredByExistingQuantity,
        valueOfAllCoffees,
        deliveryPrice,
        finalOrderTotal,

        addHouseNumberInAddress,
        addComplementInAddress,

        disableConfirmOrderButton,

        routeIfThereAreSelectedCoffees,
      }}
    >
      {children}
    </AddressAndPaymentContext.Provider>
  )
}

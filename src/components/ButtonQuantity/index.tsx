import { useContext, useState } from 'react'
import {
  ButtonQuantityContainer,
  ContainerButtonAddItem,
  ContainerButtonSubtractItem,
  ContainerQuantityContent,
} from './styles'
import { Minus, Plus } from 'phosphor-react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

interface PropsButtonQuantity {
  quantity: number
  id: string
}

export function ButtonQuantity({ quantity, id }: PropsButtonQuantity) {
  const [quantityItem, SetQuantityItem] = useState(quantity)
  const { addItemToSelectedCoffee, removeItemToSelectedCoffee } =
    useContext(CoffeesContext)

  const handleRemoveItemToSelectedCoffee = () => {
    if (quantityItem > 0) {
      SetQuantityItem((state) => {
        return state - 1
      })
      removeItemToSelectedCoffee(id)
    }
  }

  const handleAddItemToSelectedCoffee = () => {
    SetQuantityItem((state) => {
      return state + 1
    })
    addItemToSelectedCoffee(id)
  }

  return (
    <ButtonQuantityContainer>
      <ContainerButtonSubtractItem onClick={handleRemoveItemToSelectedCoffee}>
        <Minus size={14} weight="bold" />
      </ContainerButtonSubtractItem>
      <ContainerQuantityContent>{quantityItem}</ContainerQuantityContent>
      <ContainerButtonAddItem onClick={handleAddItemToSelectedCoffee}>
        <Plus size={14} weight="bold" />
      </ContainerButtonAddItem>
    </ButtonQuantityContainer>
  )
}

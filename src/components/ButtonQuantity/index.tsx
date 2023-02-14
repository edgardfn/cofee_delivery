import { useState } from 'react'
import {
  ButtonQuantityContainer,
  ContainerButtonAddItem,
  ContainerButtonSubtractItem,
  ContainerQuantityContent,
} from './styles'
import { Minus, Plus } from 'phosphor-react'

export function ButtonQuantity() {
  const [quantityItem, SetQuantityItem] = useState(0)

  const handleSubtractItem = () => {
    if (quantityItem > 0) {
      SetQuantityItem((state) => {
        return state - 1
      })
    }
  }

  const handleAddItem = () => {
    SetQuantityItem((state) => {
      return state + 1
    })
  }

  return (
    <ButtonQuantityContainer>
      <ContainerButtonSubtractItem onClick={handleSubtractItem}>
        <Minus size={14} weight="bold" />
      </ContainerButtonSubtractItem>
      <ContainerQuantityContent>{quantityItem}</ContainerQuantityContent>
      <ContainerButtonAddItem onClick={handleAddItem}>
        <Plus size={14} weight="bold" />
      </ContainerButtonAddItem>
    </ButtonQuantityContainer>
  )
}

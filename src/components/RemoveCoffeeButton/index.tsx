import { RemoveCoffeeButtonContainer } from './styles'
import { Trash } from 'phosphor-react'

export function RemoveCoffeeButton() {
  return (
    <RemoveCoffeeButtonContainer>
      <Trash weight="regular" size={16} />
      REMOVER
    </RemoveCoffeeButtonContainer>
  )
}

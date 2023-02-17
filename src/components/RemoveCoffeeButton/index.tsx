import { RemoveCoffeeButtonContainer } from './styles'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

interface RemoveCoffeeButtonProps {
  idCoffee: string
}

const resetQuantityOfSelectedCoffee = () => {}

export function RemoveCoffeeButton({ idCoffee }: RemoveCoffeeButtonProps) {
  const { resetQuantityToSelectedCoffee } = useContext(CoffeesContext)

  const resetQuantityCoffee = () => {
    resetQuantityToSelectedCoffee(idCoffee)
  }

  return (
    <RemoveCoffeeButtonContainer onClick={resetQuantityCoffee}>
      <Trash weight="regular" size={16} />
      REMOVER
    </RemoveCoffeeButtonContainer>
  )
}

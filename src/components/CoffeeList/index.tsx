import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { CardCoffee } from '../CardCoffee'
import { CoffeeListContainer, CoffeeListContent, TitleText } from './styles'

export interface Coffee {
  id: string
  image: string
  tags: string[]
  name: string
  description: string
  price: number
  quantity: number
}

interface PropsCoffeeList {
  coffees: Coffee[]
}

export function CoffeeList() {
  const { coffees } = useContext(CoffeesContext)

  return (
    <CoffeeListContainer>
      <TitleText>Nossos cafés</TitleText>
      <CoffeeListContent>
        {coffees.map((item) => {
          return <CardCoffee key={item.id} coffee={item} />
        })}
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}

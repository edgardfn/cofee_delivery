import { CardCoffee } from '../CardCoffee'
import { CoffeeListContainer, CoffeeListContent, TitleText } from './styles'

export interface interfaceCoffee {
  id: string
  image: string
  tags: string[]
  name: string
  description: string
  price: number
  quantity: number
}

interface PropsCoffeeList {
  coffees: interfaceCoffee[]
}

export function CoffeeList({ coffees }: PropsCoffeeList) {
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

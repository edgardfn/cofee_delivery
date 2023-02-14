import {
  CardCoffeeContainer,
  ContainerBuy,
  ContainerCoffeeImage,
  ContainerDescription,
  ContainerIconCart,
  ContainerQuantity,
  ContainerTags,
  ContainerTitle,
  ContainerValue,
  ContentContainerTags,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { ButtonQuantity } from '../ButtonQuantity'
import { interfaceCoffee } from '../CoffeeList'

interface PropsCardCoffee {
  coffee: interfaceCoffee
}

export function CardCoffee({ coffee }: PropsCardCoffee) {
  return (
    <CardCoffeeContainer>
      <ContainerCoffeeImage>
        <img src={coffee.image} alt="" />
      </ContainerCoffeeImage>
      <ContainerTags>
        {coffee.tags.map((tag, index) => {
          return <ContentContainerTags key={index}>{tag}</ContentContainerTags>
        })}
      </ContainerTags>
      <ContainerTitle>{coffee.name}</ContainerTitle>
      <ContainerDescription>{coffee.description}</ContainerDescription>
      <ContainerBuy>
        <ContainerValue>
          R$
          <div>
            {coffee.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </div>
        </ContainerValue>
        <ContainerQuantity>
          <ButtonQuantity />
        </ContainerQuantity>
        <ContainerIconCart>
          <ShoppingCart size={22} weight="fill" />
        </ContainerIconCart>
      </ContainerBuy>
    </CardCoffeeContainer>
  )
}

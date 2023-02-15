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
import { Coffee } from '../../reducers/coffees/reducer'
import { NavLink } from 'react-router-dom'

interface PropsCardCoffee {
  coffee: Coffee
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
          <ButtonQuantity quantity={coffee.quantity} id={coffee.id} />
        </ContainerQuantity>
        <nav>
          <NavLink to="/checkout" title="Carrinho de Compras">
            <ContainerIconCart>
              <ShoppingCart size={22} weight="fill" />
            </ContainerIconCart>
          </NavLink>
        </nav>
      </ContainerBuy>
    </CardCoffeeContainer>
  )
}

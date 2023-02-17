import { Coffee } from '../../reducers/coffees/reducer'
import { ButtonQuantity } from '../ButtonQuantity'
import { RemoveCoffeeButton } from '../RemoveCoffeeButton'
import {
  ButtonsContainer,
  ImageCoffee,
  MainContainer,
  MainInformationCoffee,
  NameCoffee,
  PriceContainer,
  ShoppingCartCardListContainer,
} from './styles'

interface ShoppingCartCardListProps {
  coffee: Coffee
}

export function ShoppingCartCardList({ coffee }: ShoppingCartCardListProps) {
  return (
    <ShoppingCartCardListContainer>
      <MainContainer>
        <ImageCoffee src={coffee.image} />
        <MainInformationCoffee>
          <NameCoffee>{coffee.name}</NameCoffee>
          <ButtonsContainer>
            <ButtonQuantity quantity={coffee.quantity} id={coffee.id} />
            <RemoveCoffeeButton idCoffee={coffee.id} />
          </ButtonsContainer>
        </MainInformationCoffee>
      </MainContainer>
      <PriceContainer>
        R$ {coffee.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
      </PriceContainer>
    </ShoppingCartCardListContainer>
  )
}

import CofeeImage from '../../assets/CofeeDeliveryImage.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import {
  ContentIconsContainer,
  IconContainer,
  IconsContainer,
  IntroContainer,
  IntroContainerImage,
  IntroContainerMain,
  TextContainer,
  TextIconsContainer,
  TextSecondaryContainer,
  TitleContainer,
} from './styles'

export function IntroHome() {
  return (
    <IntroContainer>
      <IntroContainerMain>
        <TextContainer>
          <TitleContainer>
            Encontre o café perfeito para qualquer hora do dia
          </TitleContainer>
          <TextSecondaryContainer>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </TextSecondaryContainer>
        </TextContainer>
        <IconsContainer>
          <ContentIconsContainer>
            <IconContainer backgroundColor="yellow-dark">
              <ShoppingCart size={16} weight="fill" />
            </IconContainer>
            <TextIconsContainer>Compra simples e segura</TextIconsContainer>
          </ContentIconsContainer>
          <ContentIconsContainer>
            <IconContainer backgroundColor="base-text">
              <Package size={16} weight="fill" />
            </IconContainer>
            <TextIconsContainer>
              Embalagem mantém o café intacto
            </TextIconsContainer>
          </ContentIconsContainer>
          <ContentIconsContainer>
            <IconContainer backgroundColor="yellow">
              <Timer size={16} weight="fill" />
            </IconContainer>
            <TextIconsContainer>Entrega rápida e rastreada</TextIconsContainer>
          </ContentIconsContainer>
          <ContentIconsContainer>
            <IconContainer backgroundColor="purple">
              <Coffee size={16} weight="fill" />
            </IconContainer>
            <TextIconsContainer>
              O café chega fresquinho até você
            </TextIconsContainer>
          </ContentIconsContainer>
        </IconsContainer>
      </IntroContainerMain>
      <IntroContainerImage>
        <img src={CofeeImage} alt="" />
      </IntroContainerImage>
    </IntroContainer>
  )
}

import {
  CepContainer,
  CityInput,
  ComplementInput,
  DeliveryAddressContainer,
  DeliveryAddressDescriptionContainer,
  DeliveryAddressFormContainer,
  DeliveryAddressTitleContainer,
  DistrictAndCityAndStateContainer,
  DistrictInput,
  IconContainer,
  NumberAndComplementContainer,
  NumberInput,
  StateInput,
  StreetInput,
  TextTitleContainer,
} from './styles'
import { MapPinLine } from 'phosphor-react'
import InputMask from 'react-input-mask'
import { useContext, useState } from 'react'
import axios from 'axios'
import { AddressAndPaymentContext } from '../../contexts/AddressAndPaymentContext'

export function DeliveryAddress() {
  const {
    addNewValidZipCode,
    cep,
    deliveryAddress,
    cepFound,
    addHouseNumberInAddress,
    addComplementInAddress,
  } = useContext(AddressAndPaymentContext)
  return (
    <DeliveryAddressContainer>
      <DeliveryAddressTitleContainer>
        <IconContainer>
          <MapPinLine weight="regular" size={22} />
        </IconContainer>
        <TextTitleContainer>Endereço de Entrega</TextTitleContainer>
      </DeliveryAddressTitleContainer>
      <DeliveryAddressDescriptionContainer>
        Informe o endereço onde deseja receber seu pedido
      </DeliveryAddressDescriptionContainer>
      <DeliveryAddressFormContainer>
        <CepContainer>
          <InputMask
            mask="99999-999"
            placeholder="CEP"
            list="cep-suggestions"
            onChange={(e) => addNewValidZipCode(e.target.value)}
            value={cep}
            maskChar=""
          ></InputMask>
        </CepContainer>
        <div>
          <StreetInput
            placeholder="Rua"
            type="text"
            value={deliveryAddress.logradouro}
            disabled
          ></StreetInput>
        </div>
        <NumberAndComplementContainer>
          <NumberInput
            placeholder="Número"
            type="number"
            disabled={!cepFound}
            value={deliveryAddress.number}
            onChange={(e) => addHouseNumberInAddress(e.target.value)}
          ></NumberInput>
          <ComplementInput
            placeholder="Complemento"
            type="text"
            value={deliveryAddress.complemento}
            disabled={!cepFound}
            onChange={(e) => addComplementInAddress(e.target.value)}
          ></ComplementInput>
        </NumberAndComplementContainer>
        <DistrictAndCityAndStateContainer>
          <DistrictInput
            placeholder="Bairro"
            type="text"
            value={deliveryAddress.bairro}
            disabled
          ></DistrictInput>
          <CityInput
            placeholder="Cidade"
            type="text"
            value={deliveryAddress.localidade}
            disabled
          ></CityInput>
          <StateInput
            placeholder="UF"
            value={deliveryAddress.uf}
            disabled
          ></StateInput>
        </DistrictAndCityAndStateContainer>
      </DeliveryAddressFormContainer>
    </DeliveryAddressContainer>
  )
}

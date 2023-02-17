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
import { useState } from 'react'
import axios from 'axios'

interface addressInteface {
  bairro: string
  complemento?: string
  localidade: string
  logradouro: string
  uf: string
}

export function DeliveryAddress() {
  const [cep, setCep] = useState('')
  const [cepFound, setCepFound] = useState(false)
  const [address, setAddress] = useState<addressInteface>({
    bairro: '',
    complemento: '',
    localidade: '',
    logradouro: '',
    uf: '',
  })

  if (!cepFound && cep.length === 9) {
    const cepWithoutSpecialCharacter = cep.replace('-', '')
    axios
      .get(`https://viacep.com.br/ws/${cepWithoutSpecialCharacter}/json/`)
      .then((res) => {
        const data = res.data
        console.log(data)
        if ('erro' in data) {
          console.log('cep não encontrado.')
        } else {
          const addressData: addressInteface = data
          setAddress({
            bairro: addressData.bairro,
            complemento: addressData.complemento,
            localidade: addressData.localidade,
            logradouro: addressData.logradouro,
            uf: addressData.uf,
          })
          setCepFound(true)
        }
      })
  }

  if (cepFound && cep.length < 9) {
    setAddress({
      bairro: '',
      complemento: '',
      localidade: '',
      logradouro: '',
      uf: '',
    })
    setCepFound(false)
  }

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
            onChange={(e) => setCep(e.target.value)}
            value={cep}
            maskChar=""
          ></InputMask>
        </CepContainer>
        <div>
          <StreetInput
            placeholder="Rua"
            type="text"
            value={address.logradouro}
            disabled
          ></StreetInput>
        </div>
        <NumberAndComplementContainer>
          <NumberInput
            placeholder="Número"
            type="number"
            disabled={!cepFound}
          ></NumberInput>
          <ComplementInput
            placeholder="Complemento"
            type="text"
            value={address.complemento}
            disabled={!cepFound}
          ></ComplementInput>
        </NumberAndComplementContainer>
        <DistrictAndCityAndStateContainer>
          <DistrictInput
            placeholder="Bairro"
            type="text"
            value={address.bairro}
            disabled
          ></DistrictInput>
          <CityInput
            placeholder="Cidade"
            type="text"
            value={address.localidade}
            disabled
          ></CityInput>
          <StateInput placeholder="UF" value={address.uf} disabled></StateInput>
        </DistrictAndCityAndStateContainer>
      </DeliveryAddressFormContainer>
    </DeliveryAddressContainer>
  )
}

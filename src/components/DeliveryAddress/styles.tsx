import styled from 'styled-components'

export const DeliveryAddressContainer = styled.div`
  margin-top: 0.938rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  width: 100%;
`
export const DeliveryAddressTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const IconContainer = styled.div`
  color: ${(props) => props.theme['yellow-dark']};
`
export const TextTitleContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3rem;

  color: ${(props) => props.theme['base-subtitle']};
`
export const DeliveryAddressDescriptionContainer = styled.div`
  margin-left: calc(22px + 0.5rem);

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.13rem;

  color: ${(props) => props.theme['base-text']};
`

export const DeliveryAddressFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  margin-top: 2rem;
`

export const CepContainer = styled.div`
  input {
    height: 2.625rem;
    border: 1px solid ${(props) => props.theme['base-button']};
    background-color: ${(props) => props.theme['base-input']};
    border-radius: 4px;
    padding: 0.75rem;

    width: 35.71%;
  }
`

export const StreetInput = styled.input`
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  padding: 0.75rem;

  width: 100%;
`

export const NumberAndComplementContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const NumberInput = styled.input`
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  padding: 0.75rem;

  width: 35.71%;
`

export const ComplementInput = styled.input`
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  padding: 0.75rem;

  width: calc(100% - 35.71% - 0.75rem);
`

export const DistrictAndCityAndStateContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const DistrictInput = styled.input`
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  padding: 0.75rem;

  width: 35.71%;
`

export const CityInput = styled.input`
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  padding: 0.75rem;

  width: calc(100% - 35.71% - 0.75rem - 3.75rem - 0.75rem);
`

export const StateInput = styled.input`
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  padding: 0.75rem;

  width: 3.75rem;
`

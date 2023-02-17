import styled from 'styled-components'

export const MainContainer = styled.div`
  margin-top: 0.938rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem;
`

export const FinalValuesContainer = styled.div`
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const TotalNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TextTotalNumberContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3rem;

  color: ${(props) => props.theme['base-text']};
`

export const ValueTotalNumberContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3rem;

  color: ${(props) => props.theme['base-text']};
`

export const DeliveryAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TextDeliveryAmountContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3rem;

  color: ${(props) => props.theme['base-text']};
`

export const ValueDeliveryContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3rem;

  color: ${(props) => props.theme['base-text']};
`

export const FinalOrderTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TextFinalOrderTotalContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3rem;

  color: ${(props) => props.theme['base-subtitle']};
`

export const ValueFinalOrderTotalContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3rem;

  color: ${(props) => props.theme['base-subtitle']};
`

export const ConfirmButtonContainer = styled.div`
  margin-top: 1.5rem;
`

export const ConfirmButton = styled.button`
  padding: 0.75rem 0.5rem;
  background-color: ${(props) => props.theme.yellow};
  border-radius: 6px;
  border: none;
  text-transform: uppercase;
  width: 100%;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.6rem;

  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`

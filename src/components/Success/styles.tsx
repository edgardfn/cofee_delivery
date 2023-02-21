import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 3rem;
`

export const SuccessTitleContainer = styled.div`
  color: ${(props) => props.theme['yellow-dark']};

  font-family: 'Baloo 2', cursive;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 2.625rem;
`

export const SuccessSubTitleContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6rem;

  color: ${(props) => props.theme['base-subtitle']};
`

export const ContentContainer = styled.div`
  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.375rem;
`

export const DataContainer = styled.div`
  width: 50%;
  position: relative;
  z-index: 0;

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    border-radius: 6px 36px;
    padding: 1px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);

    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const ImageDeliveryInformationContainer = styled.div`
  background-color: ${(props) => props.theme.purple};
  padding: 0.5rem;
  width: 32px;
  height: 32px;

  border-radius: 1000px;

  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextDeliveryInformationContainer = styled.div`
  line-height: 1.3rem;
`

export const DeliveryInformationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const DeliveryForecastContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const ImageDeliveryForecastContainer = styled.div`
  background-color: ${(props) => props.theme.yellow};
  padding: 0.5rem;
  width: 32px;
  height: 32px;

  border-radius: 1000px;

  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextDeliveryForecastContainer = styled.div`
  line-height: 1.3rem;
`

export const PaymentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const ImagePaymentContainer = styled.div`
  background-color: ${(props) => props.theme['yellow-dark']};
  padding: 0.5rem;
  width: 32px;
  height: 32px;

  border-radius: 1000px;

  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextPaymentContainer = styled.div`
  line-height: 1.3rem;
`

export const ImageContainer = styled.div`
  /* img {
    max-width: 30.75rem;
  } */
`

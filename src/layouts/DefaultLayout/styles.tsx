import styled from 'styled-components'

export const LayoutContainer = styled.div`
  padding: 0 10rem;

  background: ${(props) => props.theme.white};

  display: flex;
  flex-direction: column;
  margin: 0 auto;

  max-width: 90rem;
`

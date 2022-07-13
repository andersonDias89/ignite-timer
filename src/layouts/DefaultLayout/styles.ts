import styled from 'styled-components'

export const DefaultContainer = styled.div`
  max-width: 980px;
  height: calc(100vh - 80px);
  margin: 40px auto;
  padding: 40px;
  background-color: ${(props) => props.theme['gray-800']};
`

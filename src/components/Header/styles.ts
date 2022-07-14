import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;

    a {
      color: ${(props) => props.theme['gray-300']};
      padding: 0.25rem 0.5rem;
      margin: 0.5rem;
      border-bottom: 3px solid transparent;
      transition: border 0.2s ease-in-out;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`

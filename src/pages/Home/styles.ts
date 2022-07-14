import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 100%;
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['gray-100']};
    height: 3rem;
    outline: 0;
    border: none;
    font-weight: bold;
    border-radius: 0.5rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-700']};
    }

    &:hover {
      background-color: ${(props) => props.theme['green-300']};
    }

    span {
      margin-left: 0.5rem;
    }
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  input {
    margin: 0 0.35rem;
  }
`

const InputBase = styled.input`
  background: transparent;
  padding: 0 0.5rem;
  outline: none;
  color: ${(props) => props.theme['gray-100']};
  border-right: none;
`

export const InputNameTask = styled(InputBase)`
  flex: 1;
`

export const InputMinutesAmount = styled(InputBase)`
  width: 5rem;
`

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 10rem;
  margin: 2rem 0;
  font-weight: bold;
  gap: 1rem;

  .number {
    padding: 0.5rem 1rem;
    background-color: ${(props) => props.theme['gray-600']};
    border-radius: 0.5rem;
  }
`

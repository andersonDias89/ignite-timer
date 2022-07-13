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
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['white-500']};
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
  justify-content: space-around;

  input {
    margin: 0 0.35rem;
  }
`

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 10rem;
  margin: 1rem 0;
  font-weight: bold;

  .number {
    padding: 0.5rem 1rem;
    background-color: ${(props) => props.theme['gray-600']};
    border-radius: 0.5rem;
  }
`

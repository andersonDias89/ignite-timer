import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

body {
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-100']};
    font-family: 'Roboto', sans-serif;

    --webkit-font-smoothing: antialiased;
}

::-webkit-scrollbar {
    width: 5px;
    height: 4px;
  }
  
 
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme['gray-700']};
    border-radius: 5px;
    
  }
  

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['green-500']};
    border-radius: 5px;
  }
`

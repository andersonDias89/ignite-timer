import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

body {
    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-100']};
    font-family: 'Roboto', sans-serif;

    --webkit-font-smoothing: antialiased;
}
`
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: #f9f9f9;
    }
`;

export const Container = styled.div`
     max-width: 1024px;
     width: 100%;
     margin: 0 auto;

     @media (max-width: 768px) {
          max-width: 90%;
     }
`;

export const Center = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
`;

export default GlobalStyle;

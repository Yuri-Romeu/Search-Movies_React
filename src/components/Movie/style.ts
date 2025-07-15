import styled from 'styled-components';

export const MovieContainer = styled.div`
     border: 1px solid #ccc;
     padding: 10px;
     display: flex;
     flex-direction: row;
     gap: 10px;
     justify-content: flex-start;
     margin-bottom: 15px;

     img {
          width: 100px;
          height: 180px;
          display: block;
     }
`;

export const Info = styled.div`
     display: flex;
     flex-direction: column;
     gap: 4px;
`;

export const Meta = styled.div`
     display: flex;
     flex-direction: row;
     gap: 10px;
     font-size: 14px;
     color: #555;
`;

export const Text = styled.p`
     max-width: 300px;
     margin-top: 10px;
`;

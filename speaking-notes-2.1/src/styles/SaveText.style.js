import styled from "styled-components";

export const StyledInputSave = styled.div`
  grid-area: footerRight;
`;

export const StyledFileName = styled.input`
  font-family: monospace;
  font-size: 20px;
  color: white;
  background-color: rgb(54, 67, 82);
  border-color: rgb(145, 4, 4);
  border-radius: 5px;
  padding: 0.2em;
  margin-bottom: 0.5em;

  &:focus {
    outline: none;
    border-color:rgb(231, 5, 5);
  }
`

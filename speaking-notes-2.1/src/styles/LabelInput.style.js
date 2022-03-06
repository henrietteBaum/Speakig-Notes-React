import styled from "styled-components";

export const StyledLabel = styled.label`
  grid-area: footerLeft;
  background-color: maroon;
  border-radius: 5px;
  border: 0.5px solid rgb(145, 4, 4);
  color: whitesmoke;
  font-size: larger;
  width: 4em;
  height: 1.5em;
  padding: 0.1em;
  text-align: center;
  margin: 12px;
  
   &:hover {
    background-color: rgb(187, 2, 2);
    cursor: pointer ;
  }
`
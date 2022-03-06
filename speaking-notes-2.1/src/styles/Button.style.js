import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: maroon;
  border-radius: 5px;
  border-color: rgb(145, 4, 4);
  color: whitesmoke;
  font-size: larger;
  width: 4em;
  height: 1.8em;
  padding-bottom: 0.3em;
  text-align: center;
  margin: 12px;
  
   &:hover {
    background-color: rgb(187, 2, 2);
    cursor: pointer ;
  }
`;

export default StyledButton
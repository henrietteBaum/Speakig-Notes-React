import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  grid-area: main;
  width: 30em;
  background-color: rgb(54, 67, 82);
  border-radius: 5px;
  border-color: rgb(145, 4, 4);
  color: whitesmoke;
  font-size: x-large;

  &:focus {
    outline: none;
    border-color:rgb(231, 5, 5);
  }
`;

export default StyledTextarea
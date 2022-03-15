import styled from "styled-components";

export const StyledSelect = styled.select`
  grid-area: asideLeft;
  /* -webkit-appearance: none;
  -moz-appearance: none; */
  background: maroon;
  border-color: rgb(145, 4, 4);
  color: whitesmoke;
  font-size: larger;
  width: 4em;
  height: 1.8em;
  padding-bottom: 0.3em;
  text-align: center;
  margin: 12px;
  /* *width: 350px;
  *background: #58B14C; */

  &:hover{
    cursor: pointer;
    background-color: rgb(187, 2, 2);
    border-color: maroon;
  }
 `;


//  export const StyledMainSelect = styled.div`
//    overflow: hidden;
//    width: 5em;
//    -moz-border-radius: 5px;
//    -webkit-border-radius: 5px;
//    border-radius: 5px;
//    box-shadow: 1px 1px 11px #330033;
//    background: url("arrow.gif") no-repeat scroll 319px 5px #58B14C;
//  `;

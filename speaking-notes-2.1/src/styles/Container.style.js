import styled from "styled-components";


export const Container = styled.div`
  width: 100vh;
  height: 80vh;
  display: grid;
  grid-gap: 12px;
  margin-left: 12px;
  grid-template-areas: 
    'ico header'
    'asideLeft main'
    'footerLeft footerRight'
  ;

  grid-template-columns: 20% 80%;
  grid-template-rows: 60px 85% 15%;

`;

export default Container
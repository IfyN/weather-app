import styled from "styled-components";
import breakpoint from "../breakpoint";

export const StyledSidebar = styled.div`
  background-color: #1e213a;
  display: grid;
  grid-auto-flow: column;


.body{
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 40%;
}

  .weather-readings{
    color: #E7E7EB;
    text-align: center;
  }

  h1{
    position: relative;
    font-size: 7em;
  } 

  h3{
    position:relative ;
    font-size: 2em;
    font-weight: ;
  }

  .sidebar__image-cloud {
    display: flex;
    position: relative;
    width: 15vw;
}

@media ${breakpoint.device.tablet}{
   width: 100vw ;
   height: 100vh ;

   .sidebar__image-cloud{
    width: 30vw;
   }
}
  }
`;

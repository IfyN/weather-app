import styled from "styled-components";
import breakpoint from "../breakpoint";

export const StyledSidebar = styled.div`
  background-color: #1e213a;
  display: grid;
  grid-auto-flow: column;

.weather-section{
  position: relative;
  /* display: flex; */
  /* margin-left: 20%; */
}

.form{
  display: flex;
  justify-content: space-between;
  margin: 35px 46px 0;
}

.form-location {
  display: flex;
  justify-content: space-between;
  margin: 35px 47px 0;
}

.form-location form {
  display: flex;
  justify-content: space-between;
  margin: 35px 46px 0;
  width: 268px;
}

input{
  height: 40px;
  width: 161px;
  background-color: #6E707A;
  border: none;
}

input::placeholder{
  color: #E7E7EB;
  text-align: center;
  font-size: 16px;
}

.round-button{
  height: 40px;
  width: 40px;
  background-color: #6E707A;
  border-radius: 50%;
  border:none ;
}

.square-button{
  height: 40px;
  width: 40px;
  background-color: #6E707A;
  border-radius: 50%;
  border:none ;
}

.body{
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 25%;
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

import styled from "styled-components";
import breakpoint from "../breakpoint";

export const StyledSidebar = styled.div`
  background-color: #1e213a;
  display: grid;
  grid-auto-flow: column;

.weather-section{
  position: relative;
  margin: 50px;
}

.form{
  display: flex;
  justify-content: space-between;
}

.form-location {
  display: flex;
  justify-content: center;
}

.form-location input {
  height: 40px;
  width: 268px;
  border: 1px solid #E7E7EB;
  background-color: #1E213A;
}

.form input{
  height: 40px;
  width: 200px;
  background-color: #6E707A;
  border: none;
}

.input-location{
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
}

.input-location input{
  height: 64px;
  width: 367px;
  border: 1px solid #616475;
  background-color: #1E213A;
}

.form-location input::placeholder{
  color: #616475;
  text-align: left;
  font-size: 16px;
  padding-left: 10px;
}

input::placeholder{
  color: #E7E7EB;
  text-align: center;
  font-size: 16px;
}

.input-location input::placeholder{
  color: #E7E7EB;
  text-align: left;
  font-size: 16px;
  padding-left: 10px;
}

.round-button{
  height: 40px;
  width: 40px;
  background-color: #6E707A;
  border-radius: 50%;
  border:none ;
}

.square-button{
  width: 86px;
  margin-left: 12px;
  background-color: #3C47E9;
  border: none;
  color: #E7E7EB;
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

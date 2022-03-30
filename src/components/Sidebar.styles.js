import styled from "styled-components";
import breakpoint from "../breakpoint";

export const StyledSidebar = styled.div`
  background-color: #1e213a;
  display: grid;
  grid-auto-flow: column;

  .weather-section {
    position: relative;
    margin: 60px 50px 0;
  }

  .weather-section-two{
    position: relative;
    margin: 40px 0;
  }

  .form {
    display: flex;
    justify-content: space-between;
  }

  .form_section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
  }

    .form-location {
      display: flex;
      justify-content: center;
      padding-top: 10%;
    }

    .form-location input {
      height: 40px;
      width: 268px;
      border: 1px solid #e7e7eb;
      background-color: #1e213a;
    }

    .form input {
      height: 40px;
      width: 200px;
      background-color: #6e707a;
      border: none;
    }

    .input-location {
      display: flex;
      justify-content: space-around;
      padding-top: 50px;
    }

    .input-location input {
      height: 64px;
      width: 367px;
      border: 1px solid #616475;
      background-color: #1e213a;
    }

    .form-location input::placeholder {
      color: #616475;
      text-align: left;
      font-size: 16px;
      padding-left: 10px;
    }

    input::placeholder {
      color: #e7e7eb;
      text-align: center;
      font-size: 16px;
    }

    .input-location input::placeholder {
      color: #e7e7eb;
      text-align: left;
      font-size: 16px;
      padding-left: 10px;
    }

    .round-button {
      height: 40px;
      width: 40px;
      background-color: #6e707a;
      border-radius: 50%;
      border: none;
    }

    .square-button {
      width: 86px;
      margin-left: 12px;
      background-color: #3c47e9;
      border: none;
      color: #e7e7eb;
    }

    .body {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 25%;
    }

    .weather-readings {
      color: #e7e7eb;
      text-align: center;
    }

    h1 {
      position: relative;
      font-size: 7em;
    }

    h3 {
      position: relative;
      font-size: 2em;
      font-weight: ;
    }

    .sidebar__image-cloud {
      display: flex;
      position: relative;
      width: 15vw;
    }

    @media ${breakpoint.device.tablet} {
      width: 100vw;
      height: 100vh;

      .sidebar__image-cloud {
        width: 30vw;
      }
    }
  }
`;

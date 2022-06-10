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
    padding: 80px 70px;
  }

  .form {
    display: flex;
    justify-content: space-between;
  }

  .search-button {
      height: 40px;
      width: 200px;
      background-color: #6e707a;
      border: none;
      color: #e7e7eb;
      cursor: pointer;
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
      height: 40px;
    }

    .form-location input {
      height: inherit;
      flex-grow: 1;
      border: 1px solid #e7e7eb;
      background-color: #1e213a;
    }

    .input-location {
      display: flex;
      justify-content: space-around;
      padding-top: 50px;
    }

    .input-location input {
      height: 64px;
      flex-grow: 1;
      border: 1px solid #616475;
      background-color: #1e213a;
    }

    .form-location input::placeholder {
      color: #616475;
      text-align: left;
      font-size: 16px;
      padding-left: 10px;
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
      height: 100%;
      margin-left: 12px;
      background-color: #3c47e9;
      border: none;
      color: #e7e7eb;
    }

    .sidebar--burger{
      position: absolute;
      right: 120px;
      top: 0;
    }

    .weather-details {
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
      font-size: 6em;
    }

    h3 {
      position: relative;
      font-size: 2em;
      font-weight: ;
    }

    .sidebar__image-cloud {
      display: flex;
      position: relative;
      width: 45%;
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

export const StyledBurger = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  background: none;

  div {
    width: 100%;
    height: 2px;
    background-color: #fff;
    border-radius: 0.5rem;
    transition: all 0.3s linear;
    transform-origin: 0 0;

    :first-child {
      transform: ${({ closeBurger }) =>
        closeBurger ? "rotate(0)" : "rotate(32deg)"};
    }

    :nth-child(2) {
      transform: ${({ closeBurger }) =>
        closeBurger ? "rotate(0)" : "rotate(-34deg)"};
    }
  }
`;

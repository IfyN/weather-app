import styled from "styled-components";
import breakpoint from "../breakpoint";

export const StyledDailyWeather = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 300px;

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    color: #fff;
  }

  .infobox-container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5, 150px);
    gap: 50px;
    margin-top: 12%;
  }

  .date-one {
    background-color: #1e213a;

    @media ${breakpoint.device.tablet} {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  img {
    display: flex;
    position: relative;
    margin-left: 25%;
    height: 62px;
  }

  .c-dashboard_infobox-text {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .c-dashboard_infobox-date {
    text-align: center;
  }

  .highlight-container {
    margin-left: 90px;
    margin-top: 72px;
  }

  .c-highlight-container {
    display: grid;
    grid-template-columns: repeat(2, 440px);
    margin-top: 9%;
    gap: 80px;
  }

  .c-highlight-container_wind {
    background-color: #1e213a;
  }

  h1.c-dashboard_infobox-date {
    font-size: 5em;
    font-weight: 800;
  }

  span.c-dashboard_infobox-unit {
    font-size: 2em;
    font-weight: 300;
  }

  .c-dashboard_infobox-reading {
    display: flex;
    flex-direction: column;
  }
`;

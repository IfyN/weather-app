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
    padding-top: 50px;
  }

  .c-highlight-container {
    display: grid;
    grid-template-columns: repeat(2, 440px);
    grid-auto-rows: max-content;
    margin-top: 9%;
    gap: 48px;
  }

  .c-highlight-container_wind {
    background-color: #1e213a;
  }

  p.c-dashboard_infobox-unit {
    text-align: center;
    font-size: 14px;
    font-weight: 200;
  }

  h1.c-dashboard_infobox-date {
    font-size: 5em;
    font-weight: 800;
    padding-bottom: 10px;
  }

  .c-dashboard_infobox-reading {
    display: flex;
    flex-direction: column;
    font-size: 3em;
    font-weight: 800;
    text-align: center;
  }
  .c-visibilty-container {
  }
`;

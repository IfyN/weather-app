import styled from "styled-components";

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

  .container {
    margin-left: ;
  }

  .infobox-container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5, 150px);
    gap: 50px;
    margin-top: 12%;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  .date-one {
    background-color: #1e213a;
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
    justify-content: center;
    grid-template-columns: repeat(2, 328px);
    gap: 50px;
    margin-top: 12%;
  }
`;

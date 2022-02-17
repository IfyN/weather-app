import styled from "styled-components";

export const StyledDailyWeather = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 300px;

  .container {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5, 200px);
    gap: 30px;
    padding: 10px;
    margin-top: 12%;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  .date-one {
    background-color: #1e213a;
  }
`;

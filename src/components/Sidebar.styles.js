import styled from "styled-components";

export const StyledSidebar = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  // width: 23%;
  background-color: #1e213a;
  padding: 88px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

import styled from "styled-components";

export const StyledSidebar = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  width: 459px;
  background-color: #1e213a;
  padding: 88px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  h1{
    top:200px;
  }

  .sidebar__image-cloud {
    position: relative;
    margin-top: 191px;
    margin-left: 128px;
    width: 202px;
}
  }
`;

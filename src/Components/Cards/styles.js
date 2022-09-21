import styled from "styled-components";

export const Body = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 100vh;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBody = styled.div`
  width: 280px;
  height: 400px;
  border-radius: 15px;
  box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.4);
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 55%;
  border-radius: 15px 15px 0 0;
  background-color: rgb(35, 22, 56);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Figure = styled.figure`
  width: 250px;
  height: 150px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const InformationBox = styled.div`
  width: 100%;
  height: calc(100% - 55%);
  background-color: rgb(231, 225, 243);
  border-radius: 0 0 15px 15px;
`;

import styled from "styled-components";
import {Card} from "antd";

export const CardBox = styled.div`
  width: 40%;
`;

export const MainCard = styled(Card)`
  background: rgba(255, 255, 255, 0.8) !important;
  position: relative;
`;

export const CityName = styled.div`
  font: bold 40px Calibri;
  position: absolute;
  top: 10px;
  left: 70%;
`;
import styled, { createGlobalStyle, keyframes, css } from "styled-components";

const BackGroundC = styled.div`
  background-color: #ffffff;
  max-width: 360px;
  min-width: 359px;
  max-height: 660px;
  min-height: 100px;
  margin: auto;
  align-items: center;
`;
const DivH = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`;
const Arrow = styled.div`
  padding: 10px;
`;
const Input = styled.input`
  background-color: #efeef0;
  border-radius: 8px;
  padding: 12px;
  border: 0;
  width: 100%;
  margin-right: 12px;
  font-size: 14px;
  color: #c8c5cb;
  &:focus {
    outline: none;
    color: black;
  }
`;
const Hrr = styled.div`
  background-color: #efeef0;
  height: 1px;
  width: 100%;
  margin-top: 6px;
`;
const Drecent = styled.div`
  padding: 16px;
`;
const Recent = styled.p`
  color: #c8c5cb;
  font-size: 10px;
`;
const Dsearches = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SSearch = styled.p`
  color: #180e25;
  font-size: 14pxs;
`;
const Arroww = styled.image`
  padding-right: 4px;
`;

export {
  BackGroundC,
  DivH,
  Arrow,
  Input,
  Hrr,
  Drecent,
  Recent,
  Dsearches,
  SSearch,
  Arroww,
};

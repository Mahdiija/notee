import styled, { createGlobalStyle, keyframes, css } from "styled-components";


const BackGroundC = styled.div`
  background-color: #faf8fc;
  max-width: 360px;
  min-width: 359px;
  max-height: 660px;
  min-height: 651px;
  margin: auto;
  align-items: center;
  position: relative;
`;
const Dhead = styled.div`
  display: flex;
`;
const Dheadleft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 38%;
  cursor: pointer;
  margin-right: 50px;
`;
const Dheadright = styled.div``;
const Headleft = styled.p`
  font-weight: 500;
  color: #a74dd1;
`;
const Headright = styled.p`
  font-weight: 500;
  color: black;
`;
const Hrr = styled.div`
  background-color: #efeef0;
  height: 1px;
  width: 100%;
  margin-top: 6px;
`;
const DIMAGE = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
`;
const Dbtn = styled.div`
  padding: 8px 16px;
  border: 1px solid #6a3ea1;
  background-color: #fff;
  border-radius: 100px;
  display: flex;
  gap: 8px;
  justify-content: center;
  width: 43%;
  margin: auto;
  margin-top: 20px;
`;
const DP = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
`;
const Pbtn = styled.p`
  font-weight: 500;
  color: #6a3ea1;
  margin-top: 0;
  margin-bottom: 0;
`;
const Hr1 = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 25px;
  background-color: #efeef0;
  height: 1px;
`;
const Dapp = styled.div`
  padding-left: 16px;
`;
const Papp = styled.p`
  color: #180e25;
  font-size: 16px;
  font-weight: 500;
`;
const INPUT = styled.input`
  border: 1px solid #c8c5cb;
  padding: 16px;
  border-radius: 8px;
  width: 83%;
  display: flex;

  margin: auto;
  margin-bottom: 30px;
  &:focus {
    outline: none;
  }
`;
const DBtn = styled.div`
  background-color: #6a3ea1;
  border-radius: 100px;
  width: 90%;
  margin: auto;
  padding: 16px 8px;
  display: flex;
  position: absolute;
  bottom: 20px;
  left: 10px;
  cursor: pointer;
`;
const Pfoot = styled.p`
  font-size: 16px;
  color: #fff;
  margin: 0;
`;
const Dfootleft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 33%;
`;

export {BackGroundC , Dhead ,  Dheadleft ,  Dheadright ,  Headleft ,  Headright ,  Hrr ,  DIMAGE ,  Dbtn ,  DP ,  Pbtn ,  Hr1 ,  Dapp ,  Papp ,  INPUT ,  DBtn ,  Pfoot ,  Dfootleft }
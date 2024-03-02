import styled, { createGlobalStyle, keyframes, css } from "styled-components";

const BackGroundC = styled.div`
  background-color: #ffffff96;
  max-width: 360px;
  min-width: 359px;
  max-height: 660px;
  min-height: 651px;
  margin: auto;
  align-items: center;
  position: relative;
  overflow-y: auto;
`;
const Dheader = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  justify-content: space-between;
`;
const Dpheader = styled.div`
  display: flex;
  align-items: center;
`;
const Pheader = styled.p`
  color: #8b4fa7;
  font-weight: 500;
  margin-bottom: 18px;
  margin-left: 8px;
`;
const Hrr = styled.div`
  background-color: #efeef0;
  width: 100%;
  height: 1.5px;
`;
const Header1 = styled.div`
  padding-right: 25px;
  padding-left: 25px;
`;
const Pheader1 = styled.p`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
`;
const Mdiv = styled.div`
  padding-right: 28px;
  padding-left: 25px;
`;
const Mp = styled.p`
  color: #827d89;
  line-height: 22px;
`;
const Dbtns = styled.div`
  padding-left: 25px;
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;
const Itembtn = styled.div`
  background-color: #efeef0;
  padding: 0px 12px;
  cursor: pointer;
  border-radius: 100px;
  &:hover {
    background-color: #f3ebeb;
  }
`;
const Pbtn = styled.p`
  font-size: 12px;
  line-height: 5spx;
  color: #827d89;
`;
const Fdiv = styled.div`
  position: absolute;
  bottom: 0;
  border-top: 1.5px solid #efeef0;
  display: flex;
  justify-content: space-between;
  width: 360px;
  padding-top: 2px;
  padding-bottom: 2px;
  align-items: center;
`;
const Fdivleft = styled.div`
  padding-left: 20px;
`;
const Fpleft = styled.p`
  font-size: 12px;
  line-height: 14.52px;
`;
const Fmaindiv = styled.div`
  display: flex;
  gap: 20px;
`;
const Fdivright = styled.div`
  display: flex;
  margin: auto;
  cursor: pointer;
`;
const Fdivrightt = styled.div`
  background-color: #6a3ea1;
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #8552af;
    transition: 0.5ms;
  }
`;
const DDiv = styled.div`
  min-width: 359px;
  max-width: 360px;
  margin: auto;
`;
const Divbtnsheet = styled.div`
  justify-content: end;
  display: flex;
  margin-right: 5px;
`;
const Dbtnsheet = styled.button`
  background-color: #dbdbdb;
  border-radius: 100%;

  padding-top: 7px;
  padding-bottom: 5px;
  padding-left: 7px;
  padding-right: 7px;
  cursor: pointer;
  border: 0;
  opacity: 0.4;
`;
const D = styled.div`
  padding-left: 0px;
`;
const DP = styled.p`
  font-size: 13px;
  color: #827d89;
`;
const DivBG = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 18px;
  margin-left: 0px;
`;
const DBG = styled.div`
  border-radius: 100%;
  border: 1px solid #827d89;
  width: 32px;
  height: 32px;
  background-color: #fff;
  cursor: pointer;
`;
const DBG1 = styled.div`
  border-radius: 100%;

  width: 32px;
  height: 32px;
  background-color: #f7dee3;
  cursor: pointer;
`;
const DBG2 = styled.div`
  border-radius: 100%;

  width: 32px;
  height: 32px;
  background-color: #efe9f7;
  cursor: pointer;
`;
const DBG3 = styled.div`
  border-radius: 100%;

  width: 32px;
  height: 32px;
  background-color: #daf6e4;
  cursor: pointer;
`;
const DBG4 = styled.div`
  border-radius: 100%;

  width: 32px;
  height: 32px;
  background-color: #fdebab;
  cursor: pointer;
`;
const DBG5 = styled.div`
  border-radius: 100%;

  width: 32px;
  height: 32px;
  background-color: #f7f6d4;
  cursor: pointer;
`;
const DBG6 = styled.div`
  border-radius: 100%;

  width: 32px;
  height: 32px;
  background-color: #efeef0;
  cursor: pointer;
`;
const Hr1 = styled.div`
  background-color: #efeef0;
  width: 97%;
  height: 1.5px;

  margin-top: 30px;
`;
const Ddelete = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  gap: 12px;
  border-radius: 10px;
  &:hover {
    background-color: #f3f3f3;
    transition: 0.7s;
  }
`;
const IMGdelete = styled.image`
  margin-top: 5px;
  padding-left: 10px;
`;
const Pdelete = styled.p`
  color: #ce3a54;
  font-weight: 500;
  font-size: 17px;
`;
const DivImg = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;
const Dparag = styled.div`
  display: flex;
  justify-content: center;
`;
const Parag = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
const Parag1 = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #827d89;
  line-height: 22.4px;
  max-width: 231px;
  text-align: center;
`;
const DBtn = styled.button`
  background-color: #6a3ea1;
  border-radius: 100px;
  padding: 8px 16px;
  border: 0;
  color: #fff;
  font-weight: 500;
  margin-top: 5px;
  cursor: pointer;
`;
const Dinputtitle = styled.div``;
const Inputtitle = styled.input`
  outline: none;
  border: 0;
  padding: 16px;
  border-radius: 16px;
  width: 80%;
  margin: auto;
  display: flex;
  font-size: 20px;
  margin-top: 30px;
`;

const Dinput = styled.div``;
const Input = styled.textarea`
  outline: none;
  border: 0;
  padding: 16px;
  border-radius: 16px;
  width: 80%;
  margin: auto;
  display: flex;
  font-size: 20px;
  margin-top: 30px;
`;
const Derror = styled.div`
  margin-top: 5px;
  padding-left: 26px;
`;
const Error = styled.p`
  color: red;
  font-size: 14px;
`;
const DBTN = styled.div`
  margin-right: 15px;
  cursor: pointer;
`;
const BTN = styled.p`
  padding: 8px;
  color: #972f97;
  font-weight: 500;
`;

export {
  BackGroundC,
  Dheader,
  Dpheader,
  Pheader,
  Hrr,
  Header1,
  Pheader1,
  Mdiv,
  Mp,
  Dbtns,
  Itembtn,
  Pbtn,
  Fdiv,
  Fdivleft,
  Fpleft,
  Fmaindiv,
  Fdivright,
  Fdivrightt,
  DDiv,
  Divbtnsheet,
  Dbtnsheet,
  D,
  DP,
  DivBG,
  DBG,
  DBG1,
  DBG2,
  DBG3,
  DBG4,
  DBG5,
  DBG6,
  Hr1,
  Ddelete,
  IMGdelete,
  Pdelete,
  DivImg,
  Dparag,
  Parag,
  Parag1,
  DBtn,
  Dinputtitle,
  Inputtitle,
  Dinput,
  Input,
  Derror,
  Error,
  DBTN,
  BTN,
};

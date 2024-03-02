import styled, { createGlobalStyle, keyframes, css } from "styled-components";
const BackGroundC = styled.div`
  background-color: #fff;
  max-width: 360px;
  min-width: 359px;

  min-height: 651px;
  margin: auto;
  align-items: center;
  padding: 10px;
`;
const Logg = styled.div`
  display: flex;
  flex-direction: column;
  height: 43vh;
  align-items: start;
  justify-content: end;
  padding-left: 10px;
`;
const Plog = styled.p`
  font-size: 32px;
  font-weight: 700;

  margin-bottom: 4px;
  max-width: 280px;
`;
const Plog1 = styled.p`
  color: #827d89;
`;
const Input = styled.div`
  width: 100%;
`;
const Number = styled.p`
  font-weight: 500;
  padding-left: 10px;
  margin-top: 75px;
`;
const OTP = styled.div`
  width: 300px;
  padding: 18px 16px;
  border-radius: 8px;
`;
const Spann = styled.span`
  margin: 4px;
`;
const Inputt = styled.input`
  padding: 17px 13px;
  border-color: #6a3ea1;
  border-radius: 8px;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;
const DBLog = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const DAlog = styled.div`
  margin: 10px;
  margin-top: 14px;
  color: #6a3ea1;
`;
const DPlog = styled.div``;
const Plogg = styled.p`
  color: #6a3ea1;
  font-weight: 500;
`;
const Buttonlog = styled.button`
  display: flex;
  margin: auto;
  border-radius: 100px;
  padding: 16px 24px;
  gap: 10px;
  color: white;
  background-color: #6a3ea1;
  width: 328px;
  margin-top: 40px;
  border: none;
  cursor: pointer;
`;
const Pbtn = styled.p`
  width: 100%;
  margin: auto;
`;
export {
  BackGroundC,
  Logg,
  Plog,
  Plog1,
  Input,
  Number,
  OTP,
  Spann,
  Inputt,
  DBLog,
  DAlog,
  DPlog,
  Plogg,
  Buttonlog,
  Pbtn,
};

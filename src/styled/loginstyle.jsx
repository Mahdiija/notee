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
  height: 52vh;
  align-items: start;
  justify-content: end;
  padding-left: 10px;
`;
const Plog = styled.p`
  font-size: 32px;
  font-weight: 700;
  line-height: 0px;
  margin-bottom: 17px;
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
const Inputt = styled.input`
  padding: 18px 16px;
  border-radius: 8px;

  border-color: #c8c5cb;
  margin-left: 8px;
  box-shadow: none;
  width: 308px;
  &:focus {
    outline: none;
  }
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
  margin-top: 60px;
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
  Inputt,
  Buttonlog,
  Pbtn,
};

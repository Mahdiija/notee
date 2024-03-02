import styled, { createGlobalStyle, keyframes, css } from "styled-components";

const BackGroundC = styled.div`
  background-color: #faf8fc;
  max-width: 360px;
  min-width: 359px;
  max-height: 100%;
  min-height: 651px;
  margin: auto;
  align-items: center;
  position: relative;
`;
const Image = styled.div`
  height: 280px;
  width: 280px;
  padding-top: 20px;
  margin: auto;
  z-index: 9;
`;
const IMG = styled.img`
  margin-left: 25px;
`;
const Dpar = styled.div`
  margin: auto;
`;
const PH = styled.p`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 221px;
  font-size: 24px;
  font-weight: 700;
`;
const P = styled.p`
  font-size: 14px;
  width: 237px;
  margin: auto;
  text-align: center;
  margin-top: 20px;
  color: #827d89;
  text-align: center;
`;
const DIV = styled.div`
  display: flex;
  background-color: #fff;
  width: 360px;
  position: absolute;
  height: 80px;
  bottom: 0;
`;
const Dh = styled.div`
  padding: 20px;
  cursor: pointer;
  &:hover {
    background-color: #c0bfbf;
    transition: 0.8s;
  }
`;
const Dh1 = styled.div`
  padding: 20px;
  cursor: pointer;
  &:hover {
    background-color: #c0bfbf;
    transition: 0.8s;
  }
`;
const Dh2 = styled.div`
  padding: 20px;
  margin-left: 60px;
  cursor: pointer;
  &:hover {
    background-color: #c0bfbf;
    transition: 0.8s;
  }
`;
const Dh3 = styled.div`
  cursor: pointer;

  padding: 20px;
  &:hover {
    background-color: #c0bfbf;
    transition: 0.8s;
  }
`;
const Dplus = styled.div`
  position: absolute;
  justify-content: center;
  bottom: 45px;
`;
export { BackGroundC, Image, IMG, Dpar, PH, P, DIV, Dh, Dh1, Dh2, Dh3, Dplus };

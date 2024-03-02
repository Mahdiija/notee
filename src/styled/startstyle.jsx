import styled, { createGlobalStyle, keyframes, css } from "styled-components";

const BackGroundC = styled.div`
  background-color: #6a3ea1;
  max-width: 360px;
  min-width: 359px;
  max-height: 660px;
  min-height: 651px;
  margin: auto;
  align-items: center;
`;
const Image = styled.div`
  height: 280px;
  width: 280px;
  padding-top: 110px;
  margin-left: auto;
  margin-right: auto;
  z-index: 9;
`;
const DParag = styled.div`
  margin: auto;
`;
const Parag = styled.p`
  color: white;
  justify-content: center;
  display: flex;

  max-width: 328px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  margin: auto;
  margin-left: 40px;
`;
const Dot = styled.span`
  height: 13px;
  width: 13px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  margin-left: 14px;
  margin-top: 30px;
  cursor: pointer;
  &:active {
    background-color: #dedc52;
  }
  &:hover {
    background-color: #dedc52;
  }
`;

const SlideShowCon = styled.div`
  max-width: 1000px;
  position: relative;
  margin: auto;
`;
const MySlide = styled.div``;
const S = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Buttonstart = styled.button`
  display: flex;
  width: 328px;
  border-radius: 100px;
  border: 1px;
  color: #6a3ea1;
  margin: auto;
  margin-top: 80px;
  padding-top: 17px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;
const DivB = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-left: 40px;
  padding-bottom: 15px;
  font-weight: 600;
  text-decoration: none;
`;
const DivB1 = styled.div`
  margin-right: 15px;
  padding-bottom: 10px;
`;

export {
  BackGroundC,
  Image,
  DParag,
  Parag,
  Dot,
  SlideShowCon,
  MySlide,
  S,
  Wrapper,
  Buttonstart,
  DivB,
  DivB1,
};

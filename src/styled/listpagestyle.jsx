import styled, { createGlobalStyle, keyframes, css } from "styled-components";
const Card = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Itemcard = styled.div`
  background-color: #f1ecec;
  border-radius: 8px;
  position: relative;
  margin-left: 0px;
  height: 224px;
  width: 170px;
  &:hover {
    box-shadow: 1px 1px gray;
    transform: scale(30px);
    transition: 0.5s;
  }
`;
const Dh1card = styled.div`
  padding-top: 4px;
  padding-left: 25px;

  width: 156px;
  padding-bottom: 0;
`;
const H1card = styled.p`
  font-weight: 500;
  font-size: 16px;
  padding-right: 25px;
  line-height: 22px;
  color: black;
`;
const Card1 = styled.div`
  display: flex;
  gap: 15px;
  overflow: auto;
  scroll-behavior: smooth;
  padding-bottom: 100px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Cardcard = styled.div`
  display: flex;
  gap: 15px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Dpcard = styled.div`
  padding-left: 25px;
  height: 224px;
  max-width: 156px;
`;
const Pcard = styled.p`
  font-size: 10px;
  padding-right: 15px;
  line-height: 12px;
  color: #180e25;
  opacity: 0.6;
  padding-bottom: 15px;
  max-width: 156px;
  height: 224px;
`;
const BackGroundC = styled.div`
  background-color: #ffffff;
  max-width: 360px;
  min-width: 359px;
  max-height: 1000px;
  min-height: 651px;
  margin: auto;
  align-items: center;
  padding-bottom: 40px;
`;
export {
  BackGroundC,
  Itemcard,
  Dh1card,
  H1card,
  Card1,
  Cardcard,
  Dpcard,
  Pcard,
  Card,
};

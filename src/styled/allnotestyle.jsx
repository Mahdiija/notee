import styled, { createGlobalStyle, keyframes, css } from "styled-components";

const BackGroundC = styled.div`
  background-color: #faf8fc;
  max-width: 360px;
  min-width: 359px;

  min-height: 651px;
  margin: auto;
  align-items: center;
  padding-bottom: 110px;
  position: relative;
`;

const Header = styled.div`
  background-color: #6a3ea1;
`;
const Dhead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
`;
const Dleft = styled.div``;
const Dright = styled.div``;
const Pleft = styled.p`
  font: 20px;
  font-weight: 700;
  color: #fff;
`;
const Card = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Itemcard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  margin-left: px;
  margin-top: 15px;
  margin-bottom: 30px;
  height: 224px;
`;
const Dh1card = styled.div`
  padding-top: 4px;
  padding-left: 15px;

  width: 130px;
  padding-bottom: 0;
`;
const H1card = styled.p`
  font-weight: 500;
  font-size: 16px;
  padding-right: 0px;
  line-height: 22px;
  color: black;
`;
const Card1 = styled.div`
  display: flex;
  gap: 15px;
  overflow: auto;
  padding-bottom: 120px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Dpcard = styled.div`
  padding-left: 15px;

  width: 156px;
`;
const Pcard = styled.p`
  font-size: 10px;
  padding-right: 0px;
  line-height: 12px;
  color: #180e25;
  opacity: 0.6;
  padding-bottom: 15px;
`;
const Dintrest = styled.div`
  background-color: #efeef0;
  border-bottom-right-radius: 8px;
  position: absolute;
  width: 100%;
  bottom: -35px;
`;
const Pintrest = styled.p`
  color: #827d89;
  font-size: 10px;

  padding-left: 25px;
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
  justify-content: baseline;
  bottom: 45px;
`;
const Cardcard = styled.div`
  display: flex;
  gap: 15px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export {
  BackGroundC,
  Header,
  Dhead,
  Dleft,
  Dright,
  Pleft,
  Card,
  Itemcard,
  Dh1card,
  H1card,
  Card1,
  Dpcard,
  Pcard,
  Dintrest,
  Pintrest,
  DIV,
  Dh,
  Dh1,
  Dh2,
  Dh3,
  Dplus,
  Cardcard,
};

import styled, { createGlobalStyle, keyframes, css } from "styled-components";
const BackGroundC = styled.div`
  background-color: #f3f2f5;
  max-width: 360px;
  min-width: 359px;
  max-height: 1000px;
  min-height: 651px;
  margin: auto;
  align-items: center;
  padding-bottom: 40px;
  position: relative;
`;
const Divpin = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-top: 60px;
`;
const Divpinleft = styled.div``;
const Ppinleft = styled.div`
  font-size: 14px;
  font-weight: 700;
`;
const Divpinright = styled.div``;
const Ppinright = styled.div`
  color: #6a3ea1;
  font-size: 12px;
  font-weight: 500;
`;
const Card = styled.div`
  display: flex;
  gap: 15px;
  overflow: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Itemcard = styled.div`
  
  border-radius: 8px;
  position: relative;
  margin-left: 20px;
  height: 224px;
  width: 180px;
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
  padding-top: 30px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Dpcard = styled.div`
  padding-left: 25px;

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
`;
const IMG2 = styled.img`
  display: flex;
  margin: auto;
  margin-top: 25px;
`;
export {
  BackGroundC,
  Divpin,
  Divpinleft,
  Ppinleft,
  Divpinright,
  Ppinright,
  Card,
  Itemcard,
  Dh1card,
  H1card,
  Card1,
  Cardcard,
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
  Image,
  IMG,
  Dpar,
  PH,
  P,
  IMG2,
};

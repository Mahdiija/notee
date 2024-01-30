import React, { useState } from 'react'
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import myImage from '../img.svg'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { Link } from '@mui/material';
import Llink from '@mui/material/Link';
const color = purple['A100']




const BackGroundC = styled.div`

 background-color: #6A3EA1;
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

`
const DParag = styled.div`
    margin: auto;
`
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
`
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
  &:active{
    background-color: #DEDC52;
  }
  &:hover{
    background-color: #DEDC52;
  }
`

const SlideShowCon =styled.div`
    max-width: 1000px;
    position: relative;
    margin: auto;
   ;
    
    
`
const MySlide = styled.div`
 
 
`;
const S = styled.div`
    display: flex;
    
`
const Wrapper =styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`
const Buttonstart =styled.button`
  display: flex;
  width: 328px;
  border-radius: 100px;
  border: 1px;
  color: #6A3EA1;
  margin: auto;
  margin-top: 80px;
  padding-top: 17px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  
`
const DivB =styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
 margin-left: 40px;
 padding-bottom: 15px;
  font-weight: 600;
  text-decoration: none;

`
const DivB1 = styled.div`
  margin-right: 15px;
  padding-bottom: 10px;
`




export  function Startt() {
    <link rel="stylesheet" href="App.css" />
    const [swiper, setSwiper] = useState(null);

  return (
    <div>
    <BackGroundC>
        <SlideShowCon>

        <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      
      navigation
      pagination={{ clickable: true }}
      centeredSlides={true}
      onActiveIndexChange={(swiper) => {
        console.log("active index is", swiper.activeIndex);
      }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => {
        setSwiper(swiper);
      }}
    >
      <SwiperSlide>
        <Image >
            <img id='1' src={myImage} alt="" />
        </Image>
        <DParag>
            <Parag>
            Jot Down anything you want to achieve, today or in the future
            </Parag>
        </DParag>
      </SwiperSlide>
      <SwiperSlide>
        <Image>
            <img id='2' src={myImage} alt="" />
        </Image>
        <DParag>
            <Parag>
            Jot Down anything you want to achieve, today or in the future
            </Parag>
        </DParag>
        </SwiperSlide>
      <SwiperSlide><Image>
            <img id='3' src={myImage} alt="" />
        </Image>
        <DParag>
            <Parag>
            Jot Down anything you want to achieve, today or in the future
            </Parag>
        </DParag></SwiperSlide>
      
      <Wrapper>
                 <Dot></Dot>
                 <Dot></Dot>
                 <Dot></Dot>
            </Wrapper>
    </Swiper>
        </SlideShowCon>
        
            
          <Link href={'Login'} underline='none' >
          <Buttonstart>
        <DivB>Let’s Get Started</DivB><DivB1><EastOutlinedIcon></EastOutlinedIcon></DivB1>
        </Buttonstart>
          </Link>
        
            
    
     </BackGroundC>
  </div>
  )
}

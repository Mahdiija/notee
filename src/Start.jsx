import React from 'react'
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import myImage from './img.svg'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
const color = purple['A100']




const BackGroundC = styled.div`

 background-color: #6A3EA1;
max-width: 360px;
min-width: 359px;
max-height: 700px;
min-height: 699px;
margin: auto;

`;
const Image = styled.div`
height: 280px;
width: 280px;
padding-top: 150px;
margin-left: auto;
margin-right: auto;
z-index: 9;

`
const DParag = styled.div`
    margin-left: auto;
    margin-right: auto;
`
const Parag = styled.p`
    color: white;
    max-width: 328px;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    margin: auto;
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
    
`




export default function () {
    <link rel="stylesheet" href="App.css" />

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
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
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
      
      
    </Swiper>
        </SlideShowCon>
        
            <Wrapper>
                 <Dot></Dot>
                 <Dot></Dot>
                 <Dot></Dot>
            </Wrapper>
          

            <Stack direction="row" spacing={2}>
                <Button className='button'>Primary</Button>
                
            </Stack>
        
    
     </BackGroundC>
  </div>
  )
}

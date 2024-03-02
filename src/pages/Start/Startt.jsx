import React, { useState } from "react";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import myImage from "../../images/img.svg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { Link } from "@mui/material";
import Llink from "@mui/material/Link";
import {
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
} from "../../styled/startstyle";

export function Startt() {
  <link rel="stylesheet" href="App.css" />;
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
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
          >
            <SwiperSlide>
              <Image>
                <img id="1" src={myImage} alt="" />
              </Image>
              <DParag>
                <Parag>
                  Jot Down anything you want to achieve, today or in the future
                </Parag>
              </DParag>
            </SwiperSlide>
            <SwiperSlide>
              <Image>
                <img id="2" src={myImage} alt="" />
              </Image>
              <DParag>
                <Parag>
                  Jot Down nothing you can do to achieve, today or in the future
                </Parag>
              </DParag>
            </SwiperSlide>
            <SwiperSlide>
              <Image>
                <img id="3" src={myImage} alt="" />
              </Image>
              <DParag>
                <Parag>Up Jot anything you want to achieve</Parag>
              </DParag>
            </SwiperSlide>

            <Wrapper>
              <Dot></Dot>
              <Dot></Dot>
              <Dot></Dot>
            </Wrapper>
          </Swiper>
        </SlideShowCon>

        <Link href={"Login"} underline="none">
          <Buttonstart>
            <DivB>Let’s Get Started</DivB>
            <DivB1>
              <EastOutlinedIcon></EastOutlinedIcon>
            </DivB1>
          </Buttonstart>
        </Link>
      </BackGroundC>
    </div>
  );
}

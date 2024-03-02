import React from "react";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import myImage from "../../images/img5.svg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { Link } from "@mui/material";
import {
  BackGroundC,
  Image,
  IMG,
  Dpar,
  PH,
  P,
  DIV,
  Dh,
  Dh1,
  Dh2,
  Dh3,
  Dplus,
} from "../../styled/finishedstyle";
export function Finished() {
  return (
    <BackGroundC>
      <Image>
        <IMG src={myImage} alt="" />
      </Image>
      <Dpar>
        <PH>Coming Soon</PH>
        <P>this feature for future, for create new, click this button</P>
      </Dpar>
      <DIV>
        <Link href={"NotesPage"}>
          <Dh>
            <HomeOutlinedIcon color="secondary" fontSize="large" />
          </Dh>
        </Link>

        <Link href={"Finished"}>
          <Dh1>
            <BeenhereIcon color="secondary" fontSize="large" />
          </Dh1>
        </Link>

        <Link href={"AddNotePage"}>
          <Dplus>
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Fab color="secondary" aria-label="add">
                <AddIcon />
              </Fab>
            </Box>
          </Dplus>
        </Link>
        <Link href={"SearchPage"}>
          <Dh2>
            <SearchIcon color="secondary" fontSize="large" />
          </Dh2>
        </Link>
        <Link href={"Setting"}>
          <Dh3>
            <SettingsOutlinedIcon color="secondary" fontSize="large" />
          </Dh3>
        </Link>
      </DIV>
    </BackGroundC>
  );
}

import React from "react";
import { Link } from "@mui/material";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import myImage from "../../images/Icon.svg";
import {
  BackGroundC,
  DivH,
  Arrow,
  Input,
  Hrr,
  Drecent,
  Recent,
  Dsearches,
  SSearch,
  Arroww,
} from "../../styled/searchpagestyle";

export function Search({ handleSearchNote }) {
  return (
    <BackGroundC>
      <DivH>
        <Link href={"NotesPage"}>
          <Arrow>
            <KeyboardArrowLeftIcon />
          </Arrow>
        </Link>

        <Input
          onChange={(event) => handleSearchNote(event.target.value)}
          placeholder="Search..."
        />
      </DivH>
      <Hrr />

      {/* <Drecent>
        <Recent>RECENT SEARCHES</Recent>
      </Drecent>
      <Dsearches>
        <SSearch>Product Idea</SSearch>
        <Arroww>
          <img src={myImage} alt="" />
        </Arroww>
      </Dsearches>
      <Dsearches>
        <SSearch>Monthly Buying List</SSearch>
        <Arroww>
          <img src={myImage} alt="" />
        </Arroww>
      </Dsearches> */}
    </BackGroundC>
  );
}

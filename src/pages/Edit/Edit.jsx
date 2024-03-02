import React from "react";

import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import myImage from "../../images/ProfilePicture.svg";
import { Link } from "@mui/material";
import myImage2 from "../../images/pencil-alt.svg";
import myImage3 from "../../images/check.svg";
import CheckIcon from "@mui/icons-material/Check";
import { BackGroundC , Dhead ,  Dheadleft ,  Dheadright ,  Headleft ,  Headright ,  Hrr ,  DIMAGE ,  Dbtn ,  DP ,  Pbtn ,  Hr1 ,  Dapp ,  Papp ,  INPUT ,  DBtn ,  Pfoot ,  Dfootleft  } from "../../styled/editstyle";

export function Edit() {
  return (
    <BackGroundC>
      <Dhead>
        <Link underline="none" href={"Setting"}>
          <Dheadleft>
            <NavigateBeforeIcon color="secondary" fontSize="small" />
            <Headleft>Settings</Headleft>
          </Dheadleft>
        </Link>

        <Dheadright>
          <Headright>Edit Profile</Headright>
        </Dheadright>
      </Dhead>
      <Hrr />
      <DIMAGE>
        <img src={myImage} alt="" />
      </DIMAGE>
      <Link href={"Editt"} underline="none">
        <Dbtn>
          <img src={myImage2} alt="" />
          <Pbtn>Change Image</Pbtn>
        </Dbtn>
      </Link>
      <Hr1 />
      <Dapp>
        <Papp>Full Name</Papp>
      </Dapp>
      <INPUT />
      <Dapp>
        <Papp>Mobile</Papp>
      </Dapp>
      <INPUT />
      <DBtn>
        <Dfootleft>
          <img src={myImage3} alt="" />
        </Dfootleft>
        <div>
          <Pfoot>Save Changes</Pfoot>
        </div>
      </DBtn>
    </BackGroundC>
  );
}

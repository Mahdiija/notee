"use client";

import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import { useState } from "react";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import myImage from "../../images/Profilepic.svg";
import myImage1 from "../../images/email.svg";
import myImage2 from "../../images/pencil-alt.svg";
import myImage3 from "../../images/text-size.svg";
import myImage4 from "../../images/logout.svg";
import { Link } from "@mui/material";
import {
  BackGroundC,
  Dhead,
  Dheadleft,
  Dheadright,
  Headleft,
  Headright,
  Hrr,
  DIV,
  IMAGE,
  Divname,
  Name,
  DEmail,
  Email,
  Dbtn,
  DP,
  Pbtn,
  Hr1,
  Dapp,
  Papp,
  Dtext,
  Dleft,
  Pleft,
  Pleftt,
  Dright,
  Pright,
  Dfoot,
  Pfoot,
  Dheader,
  DPHEADER,
  Dsheader,
  Pheader,
  Psheader,
  Dbtnfoot,
  Dcancel,
  Pcancel,
  Dyes,
  Pyes,
} from "../../styled/settingstyle";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    border: "0px",
  },
};

export function Setting() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <BackGroundC id="body">
      <Dhead>
        <Link underline="none" href={"NotesPage"}>
          <Dheadleft>
            <NavigateBeforeIcon color="secondary" fontSize="small" />
            <Headleft>Back</Headleft>
          </Dheadleft>
        </Link>

        <Dheadright>
          <Headright>Settings</Headright>
        </Dheadright>
      </Dhead>
      <Hrr />
      <DIV>
        <IMAGE>
          <img src={myImage} alt="" />
        </IMAGE>
        <Divname>
          <Name>Michael Antonio</Name>
          <DEmail>
            <img src={myImage1} alt="" />
            <Email>anto_michael@gmail.com</Email>
          </DEmail>
        </Divname>
      </DIV>
      <Link href={"Editt"} underline="none">
        <Dbtn>
          <img src={myImage2} alt="" />
          <Pbtn>Edit Profile</Pbtn>
        </Dbtn>
      </Link>

      <Hr1 />
      <Dapp>
        <Papp>APP SETTINGS</Papp>
      </Dapp>
      <Dtext>
        <Dleft>
          <img src={myImage3} alt="" />
          <Pleft>Text Size</Pleft>
        </Dleft>
        <Dright>
          <Pright>Medium</Pright>
        </Dright>
      </Dtext>
      <Hr1 />
      <Dtext onClick={openModal}>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Dheader>
            <DPHEADER>
              <Pheader>Log Out</Pheader>
            </DPHEADER>
            <Dsheader>
              <Psheader>
                Are you sure you want to log out from the application?
              </Psheader>
            </Dsheader>
          </Dheader>
          <Dbtnfoot>
            <Dcancel onClick={() => setIsOpen(false)}>
              <Pcancel>Cancel</Pcancel>
            </Dcancel>
            <Link underline="none" href={"Login"}>
              <Dyes>
                <Pyes>Yes</Pyes>
              </Dyes>
            </Link>
          </Dbtnfoot>
        </Modal>
        <Dleft>
          <img src={myImage4} alt="" />
          <Pleftt>Log Out</Pleftt>
        </Dleft>
      </Dtext>
      <Dfoot>
        <Pfoot>Makarya Notes v1.1</Pfoot>
      </Dfoot>
    </BackGroundC>
  );
}

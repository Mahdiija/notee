import React from "react";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import myImage from "../../images/img4.svg";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import { Link } from "@mui/material";
import {
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
} from "../../styled/allnotestyle";

export function Allnotes({ notes }) {
  return (
    <BackGroundC>
      <Header>
        <Dhead>
          <Dleft>
            <Pleft>All Notes</Pleft>
          </Dleft>
          <Dright>
            <img src={myImage} alt="" />
          </Dright>
        </Dhead>
      </Header>

      <Card1>
        {notes
          ? notes.map((note) => {
              return (
                <Link underline="none" href={`/edit/${note.noteId}`}>
                  <Cardcard>
                    <Itemcard key={note.noteId}>
                      <Dh1card>
                        <H1card> {note.noteTitle.substring(0, 80)}</H1card>
                      </Dh1card>
                      <Dpcard>
                        <Pcard>{note.noteContent.substring(0, 150)}</Pcard>
                      </Dpcard>
                    </Itemcard>
                  </Cardcard>
                </Link>
              );
            })
          : null}
      </Card1>
      <DIV>
        <Dh>
          <HomeIcon color="secondary" fontSize="large" />
        </Dh>
        <Link href={"Finished"}>
          <Dh1>
            <BeenhereOutlinedIcon color="secondary" fontSize="large" />
          </Dh1>
        </Link>

        <Link href={"NewNote"}>
          <Dplus>
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Fab color="secondary" aria-label="add">
                <AddIcon />
              </Fab>
            </Box>
          </Dplus>
        </Link>

        <Dh2>
          <SearchIcon color="secondary" fontSize="large" />
        </Dh2>
        <Dh3>
          <SettingsOutlinedIcon color="secondary" fontSize="large" />
        </Dh3>
      </DIV>
    </BackGroundC>
  );
}

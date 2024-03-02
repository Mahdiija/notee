import React from "react";
import { Link } from "@mui/material";
import styled, { ThemeProvider } from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import Arrowimg from "../../images/Arrow.svg";
import myImage1 from "../../images/img1.svg";
import {
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
} from "../../styled/home1style";

export function Home1({ notes }) {
  console.log(notes);

  if (!notes || notes.length === 0) {
    return (
      <BackGroundC>
        <Image>
          <IMG src={myImage1} alt="" />
        </Image>
        <Dpar>
          <PH>Start Your Journey</PH>
          <P>
            Every big step start with small step. Notes your first idea and
            start
            <br />
            your journey!
          </P>
        </Dpar>

        <IMG2 src={Arrowimg} alt="" />

        <DIV>
          <Dh>
            <HomeIcon color="secondary" fontSize="large" />
          </Dh>
          <Link href={"Finished"}>
            <Dh1>
              <BeenhereOutlinedIcon color="secondary" fontSize="large" />
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
          <Link href={"Search"}>
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
  return (
    <BackGroundC>
      <Divpin>
        <Divpinleft>
          <Ppinleft>Pinned notes</Ppinleft>
        </Divpinleft>
        <Link href={"AllPinnedPage"}>
          <Divpinright>
            <Ppinright>View all</Ppinright>
          </Divpinright>
        </Link>
      </Divpin>
      <Card>
        {notes
          ? notes
              .filter((note) => note.isPin === true)
              .map((note) => {
                return (
                  <Link underline="none" href={`/edit/${note.noteId}`}>
                    <Cardcard>
                      <Itemcard  style={{backgroundColor: note.bgColor}} key={note.noteId}>
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
      </Card>
      <Divpin>
        <Divpinleft>
          <Ppinleft>Notes</Ppinleft>
        </Divpinleft>
        <Link href={"Allnotespage"}>
          <Divpinright>
            <Ppinright>View all</Ppinright>
          </Divpinright>
        </Link>
      </Divpin>{" "}
      <Card1>
        {notes
          ? notes.map((note) => {
              console.log(note.bgColor);
              return (
                <Link underline="none" href={`/edit/${note.noteId}`}>
                  <Cardcard>
                    <Itemcard style={{backgroundColor: note.bgColor}} key={note.noteId}>
                      <Dh1card>
                        <H1card> {note.noteTitle}</H1card>
                      </Dh1card>
                      <Dpcard>
                        <Pcard>{note.noteContent}</Pcard>
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

import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useParams } from "react-router";
import { Provider, useDispatch, useSelector } from "react-redux";
import { editNote, getAllNotes } from "./noteSlice";
import "react-toastify/dist/ReactToastify.css";
import { configureStore, createSlice, createStore } from "@reduxjs/toolkit";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "@mui/material";
import { grey, purple, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import Sheet, { SheetRef } from "react-modal-sheet";
import noteSlice from "./noteSlice";
import CloseIcon from "@mui/icons-material/Close";
import myImage from "../../images/trash.svg";
import myImage2 from "../../images/img3.svg";

import { addNewNote } from "../../features/notes/noteSlice";
import { parseISO, formatDistanceToNowStrict } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import { removeNote } from "../../features/notes/noteSlice";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import {
  BackGroundC,
  Dheader,
  Dpheader,
  Pheader,
  Hrr,
  Header1,
  Pheader1,
  Mdiv,
  Mp,
  Dbtns,
  Itembtn,
  Pbtn,
  Fdiv,
  Fdivleft,
  Fpleft,
  Fmaindiv,
  Fdivright,
  Fdivrightt,
  DDiv,
  Divbtnsheet,
  Dbtnsheet,
  D,
  DP,
  DivBG,
  DBG,
  DBG1,
  DBG2,
  DBG3,
  DBG4,
  DBG5,
  DBG6,
  Hr1,
  Ddelete,
  IMGdelete,
  Pdelete,
  DivImg,
  Dparag,
  Parag,
  Parag1,
  DBtn,
  Dinputtitle,
  Inputtitle,
  Dinput,
  Input,
  Derror,
  Error,
  DBTN,
  BTN,
} from "../../styled/editnoteformstyle";

export default function EditNoteForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const notes = useSelector(getAllNotes);

  let tempNote = notes.filter((note) => note.noteId === id);
  const [formData, setFormData] = useState(tempNote[0]);
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [canSave, setCanSave] = useState(true);

  const onFormDataChange = (event) => {
    event.preventDefault();
    if (event.target.name === "noteTitle") {
      if (event.target.value.length === 0) {
        setTitleError(true);
      } else {
        setTitleError(false);
        setCanSave(true);
      }
    }

    if (event.target.name === "noteContent") {
      if (event.target.value.length === 0) {
        setContentError(true);
      } else {
        setContentError(false);
        setCanSave(true);
      }
    }

    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onSaveNoteClicked = () => {
    if (!titleError && !contentError) {
      console.log(formData);
      dispatch(editNote(formData));
      toast("Note edited successfully");
      setFormData({ noteTitle: "", noteContent: "" });
    }
  };
  const [isOpen, setOpen] = useState(false);
  const [isOpenn, setOpenn] = useState(false);
  const [isPin, setisPin] = useState(false);
  const bgColor = formData.bgColor;

  return (
    <BackGroundC>
      <Dheader>
        <Link href={"NotesPage"} underline="none">
          <Dpheader>
            <NavigateBeforeIcon fontSize="small" color="secondary" />
            <Pheader>Back</Pheader>
          </Dpheader>
        </Link>
        <Link underline="none" href={"/NotesPage"}>
          <DBTN onClick={onSaveNoteClicked} disabled={!canSave}>
            <BTN>Save</BTN>
          </DBTN>
        </Link>
      </Dheader>

      <Hrr></Hrr>
      <Dinputtitle>
        <Inputtitle
          onChange={onFormDataChange}
          defaultValue={formData.noteTitle}
          name="noteTitle"
          id="noteTitle"
          placeholder="Title"
        />
        <Derror>
          <Error>{contentError ? "Title can't be empty!" : ""}</Error>
        </Derror>
      </Dinputtitle>
      <Dinput>
        <Input
          rows={10}
          onChange={onFormDataChange}
          defaultValue={formData.noteContent}
          name="noteContent"
          id="noteContent"
          placeholder="Note"
        />
        <Derror>
          <Error>{contentError ? "Note can't be empty!" : ""}</Error>
        </Derror>
      </Dinput>
      <ToastContainer />
      <Dbtns>
        <Itembtn>
          <Pbtn>Important</Pbtn>
        </Itembtn>
        <Itembtn>
          <Pbtn>Top Priority</Pbtn>
        </Itembtn>
      </Dbtns>
      <Dbtns>
        <Itembtn>
          <Pbtn>Should be Done This Week</Pbtn>
        </Itembtn>
        <Itembtn>
          <Pbtn>Important</Pbtn>
        </Itembtn>
      </Dbtns>

      <Fdiv>
        <Fdivleft>
          {/* {notes ? notes.filter(item=>item.noteId===id)} */}
          {notes
            ? notes.map((note) => {
                return (
                  note.noteId === id && (
                    <>
                      <Fpleft key={note.noteId} value={note.noteDate}>
                        Last edited on {""}
                        {formatDistanceToNowStrict(parseISO(note.noteDate))}
                      </Fpleft>
                    </>
                  )
                );
              })
            : null}
        </Fdivleft>
        <Fmaindiv>
          <Fdivright>
            <div
              onClick={(state) => {
                console.log(isPin);
                setisPin(true);

                setFormData({ ...formData, isPin: !formData.isPin });

                setOpenn(true);
              }}
            >
              <BookmarkBorderIcon />
            </div>
          </Fdivright>
          <Fdivrightt>
            <div onClick={() => setOpen(true)}>
              <MoreHorizIcon style={{ fill: "#fff" }} />
            </div>
          </Fdivrightt>
        </Fmaindiv>
      </Fdiv>

      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[400, 300, 100, 0]}
        initialSnap={1}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller draggableAt="both">
              <DDiv>
                <Divbtnsheet>
                  <Dbtnsheet onClick={() => setOpen(false)}>
                    <CloseIcon fontSize="small" />
                  </Dbtnsheet>
                </Divbtnsheet>

                <D>
                  <DP>CHANGE BACKGROUND</DP>
                </D>

                <DivBG>
                  <DBG
                    onClick={() => {
                      setFormData({ ...formData, bgColor: "#fff" });
                      console.log(bgColor);
                      bgColor: "#fff";
                    }}
                  >
                    {" "}
                  </DBG>
                  <DBG1
                    onClick={() => {
                      setFormData({ ...formData, bgColor: "#F7DEE3" });
                      console.log(bgColor);
                    }}
                  ></DBG1>
                  <DBG2
                    onClick={() => {
                      setFormData({ ...formData, bgColor: "#EFE9F7" });
                      bgColor: "#EFE9F7";
                    }}
                  ></DBG2>
                  <DBG3
                    onClick={() => {
                      setFormData({ ...formData, bgColor: "#DAF6E4" });
                      bgColor: "#DAF6E4";
                    }}
                  ></DBG3>
                  <DBG4
                    onClick={() => {
                      setFormData({ ...formData, bgColor: "#FDEBAB" });
                      bgColor: "#FDEBAB";
                    }}
                  ></DBG4>
                  <DBG5
                    onClick={() => {
                      setFormData({ ...formData, bgColor: "#F7F6D4" });
                      bgColor: "#F7F6D4";
                    }}
                  ></DBG5>
                  <DBG6
                    onClick={() => {
                      setFormData({ ...formData, bgColor: "#EFEEF0" });
                      bgColor: "#EFEEF0";
                    }}
                  ></DBG6>
                </DivBG>
                <Hr1 />
                {notes
                  ? notes.map((note) => {
                      return (
                        note.noteId === id && (
                          <>
                            <Link href={"/Notespage"}>
                              <Ddelete
                                onClick={() =>
                                  dispatch(removeNote(note.noteId))
                                }
                              >
                                <IMGdelete>
                                  <img src={myImage} alt="" />
                                </IMGdelete>
                                <Pdelete>Delete Note</Pdelete>
                              </Ddelete>
                            </Link>
                          </>
                        )
                      );
                    })
                  : null}
              </DDiv>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
      <Sheet
        isOpen={isOpenn}
        onClose={() => setOpenn(false)}
        snapPoints={[600, 500, 100, 0]}
        initialSnap={1}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller draggableAt="both">
              <DDiv>
                <Divbtnsheet>
                  <Dbtnsheet onClick={() => setOpenn(false)}>
                    <CloseIcon fontSize="small" />
                  </Dbtnsheet>
                </Divbtnsheet>
                <DivImg>
                  <img src={myImage2} alt="" />
                </DivImg>
                <Dparag>
                  <Parag>Notes Pinned Successfully</Parag>
                </Dparag>
                <Dparag>
                  <Parag1>This note already displayed on pinned section</Parag1>
                </Dparag>
                <Dparag>
                  <DBtn onClick={() => setOpenn(false)}>Close</DBtn>
                </Dparag>
              </DDiv>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </BackGroundC>
  );
}

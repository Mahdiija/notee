import { configureStore, createSlice } from "@reduxjs/toolkit";

import { v4 as uuid } from "uuid";
import {
  storeInLocalStorage,
  fetchFromLocalStorage,
} from "../../utils/helpers";

import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  notes: fetchFromLocalStorage("notes"),
  error: null,
  count: 0,
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNewNote(state, action) {
      const { noteTitle, noteContent, isPin, bgColor } = action.payload;
      let noteId = uuid();
      let newPost = { noteId, noteTitle, noteContent, isPin , bgColor };

      newPost.noteDate = new Date().toISOString();
      state.notes.push(newPost);
      storeInLocalStorage("notes", state.notes);
    },

    removeNote(state, action) {
      const tempId = action.payload;
      const tempNotes = state.notes.filter((note) => note.noteId !== tempId);
      state.notes = tempNotes;
      storeInLocalStorage("notes", tempNotes);
    },

    editNote(state, action) {
      const { noteId, noteTitle, noteContent, isPin, bgColor } = action.payload;
      const tempNotes = state.notes.map((note) => {
        const index = state.notes.findIndex(
          (note) => note.noteId === action.payload.noteId
        );
        if (note.noteId === noteId) {
          note.noteTitle = noteTitle;
          note.noteContent = noteContent;
          note.noteDate = new Date().toISOString();
          note.isPin = isPin;
          note.bgColor = bgColor;

          state.notes[index] = action.payload;
        }
        return note;
      });

      state.notes = tempNotes;
      storeInLocalStorage("notes", tempNotes);
    },

    increaseCount(state, action) {
      state.count = state.count + 1;
    },
  },
});

export const { addNewNote, removeNote, editNote } = noteSlice.actions;
export const getAllNotes = (state) => state.notes.notes;
export default noteSlice.reducer;

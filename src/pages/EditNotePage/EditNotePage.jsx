import React from 'react';
import EditNoteForm from "../../features/notes/EditNoteForm";
import { createStore , applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

import { Provider, useSelector } from "react-redux";

export default function EditNotePage() {
  return (
    <EditNoteForm />
  )
}

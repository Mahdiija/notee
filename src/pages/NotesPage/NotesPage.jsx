import React from "react";

import { Provider, useSelector } from "react-redux";
import { getAllNotes } from "../../features/notes/noteSlice";
import { Home1 } from "./Home1";
import { saved } from "../../features/notes/EditNoteForm";

export function NotesPage() {
  const notes = useSelector(getAllNotes);

  return <Home1 notes={notes} />;
}

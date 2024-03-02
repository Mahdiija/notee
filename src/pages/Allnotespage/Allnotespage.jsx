import React from 'react';

import { useSelector} from "react-redux";
import { getAllNotes } from '../../features/notes/noteSlice';

import { Allnotes } from './Allnotes';

export  function Allnotespage() {
    const notes = useSelector(getAllNotes);
    console.log(notes);
  return (
    <Allnotes notes = {notes} />
  )
}

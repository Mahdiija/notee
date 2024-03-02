import React from 'react';

import { useSelector} from "react-redux";
import { getAllNotes } from '../../features/notes/noteSlice';

import { Allpinned } from './Allpinned';

export  function AllPinnedPage() {
    const notes = useSelector(getAllNotes);
    
  return (
    <Allpinned notes = {notes} />
  )
}

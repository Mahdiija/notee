import React, { useEffect } from 'react';

import { useSelector} from "react-redux";
import { getAllNotes } from '../../features/notes/noteSlice';
import { Search } from '../Search/Search';
import { saved } from '../../features/notes/EditNoteForm';
import { useState } from 'react';
import ListPage from '../Search/ListPage';


export  function SearchPage() {
    const notes = useSelector(getAllNotes);
    const [searchText, setSearchText] = useState('')
  return (
    <>
    <Search notes = {notes} handleSearchNote={setSearchText} />
    <ListPage notes = {notes.filter((note) => note.noteTitle.toLowerCase().includes(searchText))}  />
    </>
    
  )
}

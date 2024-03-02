import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { NewNote } from './NewNote';
import { useSelector} from "react-redux";
import { getAllNotes } from '../../features/notes/noteSlice';
const AddNotePage = () => {
  const notes = useSelector(getAllNotes);
  console.log(notes);
  return (
    <div>
        
          <NewNote  notes = {notes} /> 
        
           
        
    </div>
  )
}

export default AddNotePage
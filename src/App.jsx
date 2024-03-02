
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Startt } from './pages/Start/Startt.jsx';
import { Otp } from './pages/Otp/Otp.jsx';
import { Login } from './pages/Login/Login.jsx';
import {Home, AddNote, EditNote, Notes, SingleNote} from "./pages/index";
import React from 'react'
import { NewNote } from './pages/AddNotePage/NewNote.jsx';
import { Home1 } from './pages/NotesPage/Home1.jsx';
import { AllPinnedPage } from './pages/Allpinpage/AllPinnedPage.jsx';
import { Finished } from './pages/Finish/Finished.jsx';
import { SearchPage } from './pages/SearchPage/SearchPage.jsx';
import { Allnotespage } from './pages/Allnotespage/Allnotespage.jsx';
import { Setting } from './pages/Setting/Setting.jsx';
import { Edit } from './pages/Edit/Edit.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import AddNotePage from './pages/AddNotePage/AddNotePage.jsx';
import {NotesPage} from './pages/NotesPage/NotesPage.jsx';
import EditNotePage from './pages/EditNotePage/EditNotePage.jsx';

function App() {
  return (
    
<Provider store={store}>
   <Routes>
    <Route path='/' element={<Startt/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Otp' element={<Otp/>}/>
    
    <Route path='/AddNotePage' element={<AddNotePage/>}/>
    <Route path='/Home1' element={<Home1/>}/>
    <Route path='/AllPinnedPage' element={<AllPinnedPage/>}/>
    <Route path='/Finished' element={<Finished/>}/>
    <Route path='/SearchPage' element={<SearchPage/>}/>
    <Route path='/Editt' element={<Edit/>}/>
    <Route path='/NotesPage' element={<NotesPage/>}/>
    <Route path='/edit/:id' element={<EditNotePage/>}/>
    <Route path='/Allnotespage' element={<Allnotespage/>}/>

    <Route path='/Setting' element={<Setting/>}/>
    
     

    
  </Routes>
</Provider>
      
   
   
    
    
    
  );
}

export default App;

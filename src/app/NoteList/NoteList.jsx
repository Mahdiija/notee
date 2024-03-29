import React from 'react';
import React from 'react'
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import myImage1 from '../img1.svg'
import Arrowimg from '../Arrow.svg'
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import { purple } from '@mui/material/colors';
import { Link } from '@mui/material';

const color = purple[400]

const BackGroundC = styled.div`

 background-color: #ffffff96;
max-width: 360px;
min-width: 359px;
max-height: 660px;
min-height: 651px;
margin: auto;
align-items: center;

`;
const Image = styled.div`
height: 280px;
width: 280px;
padding-top: 20px;
margin: auto;
z-index: 9;

`
const IMG =styled.img`
    margin-left: 25px;
`
const Dpar =styled.div`
margin: auto;
`
const PH = styled.p`
    margin: auto;
    width: 221px;
    font-size: 24px;
    font-weight: 700;
`
const P = styled.p`
    font-size: 14px;
    width: 237px;
    margin: auto;
    text-align: center;
    margin-top: 20px;
    color: #827D89;
`
const IMG2 =styled.img`
    display: flex;
    margin: auto;
    margin-top: 25px;
`
const DIV =styled.div`
    display: flex;
    background-color: #fff;
    width: 360px;
    position: fixed;
    height: 80px;
    bottom: 0;


`
const Dh =styled.div`
    padding: 20px;
 cursor: pointer;
 &:hover{
        background-color:#c0bfbf;
           transition:0.8s ;
           
     }
`
const Dh1 =styled.div`
    padding: 20px;
 cursor: pointer;
 &:hover{
        background-color:#c0bfbf;
           transition:0.8s ;
           
     }
`
const Dh2 =styled.div`
    padding: 20px;
    margin-left: 60px;
 cursor: pointer;
 &:hover{
        background-color:#c0bfbf;
           transition:0.8s ;
           
     }
`
const Dh3 =styled.div`
    
     cursor: pointer;
     
     padding: 20px;
     &:hover{
        background-color:#c0bfbf;
           transition:0.8s ;
           
     }
`
const Dplus =styled.div`
   position: fixed;
   justify-content: center;
   bottom: 45px;
   
`
import {ImCancelCircle} from "react-icons/im";
import {FiEdit} from "react-icons/fi";
import { parseISO, formatDistanceToNow} from 'date-fns';
import {Link} from "react-router-dom";
import { removeNote } from '../../features/notes/noteSlice';
import { useDispatch } from 'react-redux';

const NotesList = ({notes}) => {
  const dispatch = useDispatch();

  if(!notes || notes.length === 0){
    return (<BackGroundC>
        <Image>
        <IMG  src={myImage1} alt="" />
        </Image>
        <Dpar>
            <PH>Start Your Journey</PH>
            <P>Every big step start with small step.
Notes your first idea and start
<br />your journey!</P>
        </Dpar>


        <IMG2 src={Arrowimg} alt=''/>

        <DIV>
            <Dh>
                <HomeIcon color='secondary' fontSize='large'/>
            </Dh>
            <Link href={'Finished'}>
            <Dh1>
                <BeenhereOutlinedIcon color='secondary' fontSize='large'/>
            </Dh1>
            </Link>
            
            <Link href={'NewNote'}>
                <Dplus>
                    <Box  sx={{ '& > :not(style)': { m: 1 } }}>
      
                        <Fab color="secondary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Box>
                </Dplus>
            </Link>
            <Link href={'Search'}>
            <Dh2>
                <SearchIcon color='secondary' fontSize='large'/>
            </Dh2>
            </Link>
            <Link href={'Setting'}>
            <Dh3>
                <SettingsOutlinedIcon color='secondary' fontSize='large'/>
            </Dh3>
            </Link>
            
            
        </DIV>
    </BackGroundC>)
  }

  return (
    <div className='notes'>
      <h5 className='fs-18 fw-8 text-uppercase notes-title'>notes</h5>
      <div className='notes-list grid'>
        {
          notes.map(note => {
            return (
              <div className='notes-item' key = {note.noteId}>
                <div className='notes-item-title'>
                  {note.noteTitle.substring(0, 80) + "..."}
                </div>
                <div className='notes-item-body'>
                  {note.noteContent.substring(0, 150) + "..."}
                </div>
                <div className='notes-item-date text-capitalize'>{formatDistanceToNow(parseISO(note.noteDate))}</div>
                <div className='notes-item-btns flex align-center justify-between'>
                  <div>
                    <button type = "button" className='notes-item-btn' onClick={() => dispatch(removeNote(note.noteId))}>
                      <ImCancelCircle />
                    </button>
                    <Link to = {`/edit/${note.noteId}`} className = "notes-item-btn">
                      <FiEdit />
                    </Link>
                  </div>

                  <Link to = {`/note/${note.noteId}`} className='read-more-btn fs-14'>Read More</Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default NotesList
import React, {useState, useEffect} from 'react';
import { Outlet } from "react-router-dom";


import { Link } from '@mui/material';
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';

const BackGroundC = styled.div`

 background-color: #FAF8FC;
max-width: 360px;
min-width: 359px;
max-height: 660px;
min-height: 651px;
margin: auto;
align-items: center;
padding-bottom: 40px;
`;
const Divpin =styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    padding-top: 60px;
`
const Divpinleft =styled.div`
    
`
const Ppinleft =styled.div`
    font-size: 14px;
    font-weight: 700;
`
const Divpinright =styled.div`
    
`
const Ppinright =styled.div`
    color: #6A3EA1;
    font-size: 12px;
    font-weight: 500;
`
const Card =styled.div`
    display: flex;
    gap: 15px;
    overflow: auto;
    
    &::-webkit-scrollbar{
        display: none;
    }
`
const Itemcard =styled.div`
    background-color: #fff;
    border-radius: 8px;
    position: relative;
    margin-left: 20px;

`
const Dh1card =styled.div`
    
    padding-top: 4px;
    padding-left: 25px;
    
    width: 156px;
    padding-bottom: 0;
`
const H1card =styled.p`
    font-weight: 500;
    font-size: 16px;
    padding-right: 25px;
    line-height: 22px;
`
const Card1 =styled.div`
    display: flex;
    gap: 15px;
    overflow: auto;
    padding-bottom: 120px;
    &::-webkit-scrollbar{
        display: none;
    }
`
const Dpcard =styled.div`
    
    padding-left: 25px;
    
    width: 156px;
`
const Pcard =styled.p`
    font-size: 10px;
    padding-right: 15px;
    line-height: 12px;
    color: #180E25;
    opacity: 0.6;
    padding-bottom: 15px;
`
const Dintrest = styled.div`
    background-color: #EFEEF0;
    border-bottom-right-radius: 8px;
    position: absolute;
    width: 100%;
    bottom: -35px;
`
const Pintrest =styled.p`
    color: #827D89;
    font-size: 10px;
    
    padding-left: 25px;
    
    
    
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
   justify-content: baseline;
   bottom: 45px;
   
`
export default function HomePage() {
    const [greetText, setGreetText] = useState("");
    const currentDate = new Date();
    const day = currentDate.toLocaleDateString('default', {weekday: 'long'});
    const month = currentDate.toLocaleString('default', {month: 'long'});
    const date = `${day}, ${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
  
    useEffect(() => {
      let currentHour = currentDate.getHours();
      if(currentHour < 12) setGreetText("Good Morning!")
      else if(currentHour < 18) setGreetText("Good Afternoon!");
      else setGreetText("Good Evening!");
    }, [])
  return (
    <BackGroundC>
    <Divpin>
        <Divpinleft>
            <Ppinleft>Pinned Notes</Ppinleft>
        </Divpinleft>
        <Link href={'Allpinned'}>
            <Divpinright>
                <Ppinright>
                View all
                </Ppinright>
            </Divpinright>
        </Link>
        
    </Divpin>
        <Card>
            <Itemcard>
                <Dh1card>
                    <H1card>💡 New Product Idea Design</H1card>
                </Dh1card>
                <Dpcard>
                    <Pcard>
                    Create a mobile app UI Kit that provide a basic notes functionality but with some improvement. <br /><br /> 

There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.
                    </Pcard>
                </Dpcard>
                <Dintrest>
                    <Pintrest>
                    Interesting Idea
                    </Pintrest>
                </Dintrest>
            </Itemcard>
            <Itemcard>
                <Dh1card>
                    <H1card>💡 New Product Idea Design</H1card>
                </Dh1card>
                <Dpcard>
                    <Pcard>
                    Create a mobile app UI Kit that provide a basic notes functionality but with some improvement. <br /><br /> 

There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.
                    </Pcard>
                </Dpcard>
                <Dintrest>
                    <Pintrest>
                    Interesting Idea
                    </Pintrest>
                </Dintrest>
            </Itemcard>
            <Itemcard>
                <Dh1card>
                    <H1card>💡 New Product Idea Design</H1card>
                </Dh1card>
                <Dpcard>
                    <Pcard>
                    Create a mobile app UI Kit that provide a basic notes functionality but with some improvement. <br /><br /> 

There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.
                    </Pcard>
                </Dpcard>
                <Dintrest>
                    <Pintrest>
                    Interesting Idea
                    </Pintrest>
                </Dintrest>
            </Itemcard>
        </Card>

        <Divpin>
        <Divpinleft>
            <Ppinleft>Latest</Ppinleft>
        </Divpinleft>
        <Link>
            <Divpinright>
                <Ppinright>
                View all
                </Ppinright>
            </Divpinright>
        </Link>
        
        </Divpin>   
        <Card1>
        <Itemcard>
                <Dh1card>
                    <H1card>💡 New Product Idea Design</H1card>
                </Dh1card>
                <Dpcard>
                    <Pcard>
                    Create a mobile app UI Kit that provide a basic notes functionality but with some improvement. <br /><br /> 

There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.
                    </Pcard>
                </Dpcard>
                
            </Itemcard>
        <Itemcard>
                <Dh1card>
                    <H1card>💡 New Product Idea Design</H1card>
                </Dh1card>
                <Dpcard>
                    <Pcard>
                    Create a mobile app UI Kit that provide a basic notes functionality but with some improvement. <br /><br /> 

There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.
                    </Pcard>
                </Dpcard>
                
            </Itemcard>
        </Card1>
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
</BackGroundC>
  )
}

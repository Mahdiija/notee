import React from 'react'
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Llink } from 'react-router-dom';
import { Link } from '@mui/material';



const BackGroundC = styled.div`

 background-color: #fff;
max-width: 360px;
min-width: 359px;
max-height: 660px;
min-height: 651px;
margin: auto;
align-items: center;

`;
const Logg =styled.div`
display:flex;
flex-direction: column;
height: 52vh;
align-items: start;
justify-content: end;
padding-left:10px;

`
const Plog =styled.p`
  font-size: 32px;
  font-weight: 700;
  line-height: 0px;
  margin-bottom: 17px;
`
const Plog1 =styled.p`
  color: #827D89;
  
`
const Input =styled.div`
  width: 100%;

`
const Number =styled.p`
  font-weight: 500;
  padding-left: 10px;
  margin-top: 75px;
`
const Inputt =styled.input`
  padding: 18px 16px;
  border-radius: 8px;
  
  border-color: #C8C5CB;
  margin-left:8px;
  box-shadow: none;
  width: 308px;
  &:focus{
    outline: none;
  }
`
const Buttonlog =styled.button`
  display: flex;
  margin: auto;
  border-radius: 100px;
  padding: 16px 24px;
  gap: 10px;
  color: white;
  background-color: #6A3EA1;
  width: 328px;
  margin-top: 60px;
  border: none;
  cursor: pointer;
  
`
const Pbtn =styled.p`
width: 100%;
margin: auto;
`



export  function Login() {
  return (
   <BackGroundC>
        <Logg>
          <Plog>Let’s Login</Plog>
          <Plog1>And notes your idea</Plog1>
        </Logg>
        <Input>
            <Number>
            Mobile Number
            </Number>
            <Inputt placeholder='Example: 0912216588'></Inputt>
        </Input>
          <Link href={'Otp'} underline='none'>
          <Buttonlog>
        <Pbtn>
        Send Code
        </Pbtn>
        </Buttonlog>

          </Link>
        
   </BackGroundC>
  )
}

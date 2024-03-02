import React from "react";
import styled, { createGlobalStyle, keyframes, css } from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Llink } from "react-router-dom";
import { Link } from "@mui/material";
import {
  BackGroundC,
  Logg,
  Plog,
  Plog1,
  Input,
  Number,
  Inputt,
  Buttonlog,
  Pbtn,
} from "../../styled/loginstyle";

export function Login() {
  return (
    <BackGroundC>
      <Logg>
        <Plog>Let’s Login</Plog>
        <Plog1>And notes your idea</Plog1>
      </Logg>
      <Input>
        <Number>Mobile Number</Number>
        <Inputt placeholder="Example: 0912216588"></Inputt>
      </Input>
      <Link href={"Otp"} underline="none">
        <Buttonlog>
          <Pbtn>Send Code</Pbtn>
        </Buttonlog>
      </Link>
    </BackGroundC>
  );
}

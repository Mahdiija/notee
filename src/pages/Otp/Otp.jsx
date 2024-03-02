import React, { useState } from "react";
import OtpInput from "react-otp-input";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { Link } from "@mui/material";
import {
  BackGroundC,
  Logg,
  Plog,
  Plog1,
  Input,
  Number,
  OTP,
  Spann,
  Inputt,
  DBLog,
  DAlog,
  DPlog,
  Plogg,
  Buttonlog,
  Pbtn,
} from "../../styled/otpstyle";

export function Otp() {
  const [otp, setOtp] = useState("");

  return (
    <BackGroundC>
      <Link href={"Login"} underline="none">
        <DBLog>
          <DAlog>
            <KeyboardArrowLeftOutlinedIcon />
          </DAlog>
          <DPlog>
            <Plogg>Back to Login</Plogg>
          </DPlog>
        </DBLog>
      </Link>

      <Logg>
        <Plog>Enter Verification Code</Plog>
        <Plog1>Insert your code sent via sms</Plog1>
      </Logg>
      <Input>
        <Number>OTP code</Number>
        <OTP>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<Spann></Spann>}
            renderInput={(props) => (
              <Inputt
                onChange={(e) => handleChange(e.target.value, index)}
                placeholder="-"
                {...props}
              />
            )}
          />
        </OTP>
      </Input>
      <Link href={"NotesPage"} underline="none">
        <Buttonlog>
          <Pbtn>Login</Pbtn>
        </Buttonlog>
      </Link>
    </BackGroundC>
  );
}

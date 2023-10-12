"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Box from "@mui/material/Box";
import Card from "app/components/Card/Card";
import TextField from "@/components/Inputs/TextField/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
// import Pattern from "@/public/photos/pattern.svg";
import female from "@/public/photos/female.jpeg";

import Image from "next/image";
const RegistrationPage = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const [formInputs, setFormInputs] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const handleInputChange = (event: SelectChangeEvent<HTMLInputElement>) => {
    setFormInputs({
      ...formInputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formInputs);

    alert(
      `${formInputs.firstName} ${formInputs.phoneNumber} selected plan : ${selectedValue} `
    );
  };

  return (
    <Card>
      <div className={styles.registration}>
        <div className={styles.pattern}>
          <Image className={styles.image} src={female} alt="pattern" />
        </div>
        <div className={styles.registerForm}>
          <h1> Registration Page </h1>
          <div className={styles.inputs}>
          
              <TextField  
                name="firstName"
                type="text"
                onChange={handleInputChange}
              />
           
              <TextField
                name="lastName"
                type="text"
                onChange={handleInputChange}
              />
           
          
           
              <TextField
                name="phoneNumber"
                type="number"
                onChange={handleInputChange}
              />
           
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["MobileDatePicker", "", "DatePicker"]}
                >
                  <DemoItem label="Mobile variant">
                    <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
           

          <button type="submit"> Submit</button>
        </div>
      </div>
      </div>
    </Card>
  );
};

export default RegistrationPage;

{
  /* <FormControl>
          <FormLabel component="legend">Select Plan</FormLabel>
            <RadioGroup
              row defaultValue="monthly" name="radio-buttons-group"
              value={selectedValue} onChange={handleRadioChange}
            >
              <FormControlLabel value="monthly" control={<Radio color="error" />} label="Monthly" />
              <FormControlLabel value="quarterly" control={<Radio color="error" />} label="Quaterly" />
              <FormControlLabel value="halfYearly" control={<Radio color="error" />} label="Half Yearly" />
              <FormControlLabel value="annual" control={<Radio color="error" />} label="Annual" />
            </RadioGroup>
          </FormControl> */
}

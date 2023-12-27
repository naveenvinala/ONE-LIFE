"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Card from "app/components/Card/Card";
import TextField from "@/components/Inputs/InputField/InputField";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Image from "next/image";
const RegistrationPage = () => {
  const [selectedValue, setSelectedValue] = useState("");
  //const date = new Date();
  const [value, setValue] = useState();
  console.log(value);

  const [formInputs, setFormInputs] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const handleInputChange = (event) => {
    setFormInputs({
      ...formInputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInputs);

    alert(
      `${formInputs.firstName} ${formInputs.phoneNumber} selected plan : ${selectedValue} `
    );
  };

  return (
    <div className={styles.registration}>
      <Card>
        <div className={styles.container}>
          <h1> Register For Free </h1>
        
          <div className={styles.registerForm}>
            <div className={styles.fields}>
            <div className={styles.formgroup}>
                <TextField
                  type="text"
                  name="firstName"
                  label="First Name"
                  onChange={handleInputChange}
                  
                />
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker 
                      onChange={(newValue) => setValue(newValue)}
                      label="joining date"
                    />
                  </DemoContainer>
                </LocalizationProvider>
                </div>
                
             
              <div className={styles.formgroup}>
                <TextField
                  name="phoneNumber"
                  type="number"
                  label="Phone Number"
                  onChange={handleInputChange}
                />
               

                <TextField
                  name="emailId"
                  type="email"
                  label="Email Id"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>

                
              </div>
            </div>
            <div className={styles.footer}>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" color="error">
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="error">
                  Submit
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </Card>
    </div>
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

"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import Card from "app/components/Card/Card";
import Center from "app/components/Center/Center";
import TextField from "app/components/Inputs/TextField/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const RegistrationPage = () => {
  const [selectedValue, setSelectedValue] = React.useState("");

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
    <div className={styles.registration}>
      <Center>
        <Card>
          <h1 className={styles.title}> One Life Registration Page </h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.column}>
                <TextField
                  name="firstName"
                  type="text"
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.column}>
                <TextField
                  name="lastName"
                  type="text"
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.column}>
                <TextField
                  name="phoneNumber"
                  type="number"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.column}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Plans
                  </FormLabel>
                  <RadioGroup
                    row
                    color="success"
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="monthly"
                    name="radio-buttons-group"
                    value={selectedValue}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="monthly"
                      control={<Radio color="error" />}
                      label="Monthly"
                    />
                    <FormControlLabel
                      value="halfYearly"
                      control={<Radio color="error" />}
                      label="Half Yearly"
                    />
                    <FormControlLabel
                      value="quarterly"
                      control={<Radio color="error" />}
                      label="Quarterly"
                    />
                    <FormControlLabel
                      value="Annually"
                      control={<Radio color="error" />}
                      label="Annual"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <Button
              className={styles.btn}
              type="submit"
              variant="outlined"
              color="error"
            >
              Get Started
            </Button>
          </form>
        </Card>
      </Center>
    </div>
  );
};

export default RegistrationPage;

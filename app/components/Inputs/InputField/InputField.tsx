import styles from "./inputField.module.scss";
import React, { useState } from "react";
import { TextField } from "@mui/material";

interface Props {
  name: string;
  type: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFields: React.FC<Props> = ({ name, type, label, onChange }) => {
  //   const inputProps = {
  //   step: 300,
  //   onChange:onChange
  // };
  return (
    <TextField
      type={type}
      name={name}
      InputProps={
        {
          // readOnly: true,
        }
      }
      margin="dense"
      label={label}
      variant="outlined"
    />
  );
};

export default TextFields;

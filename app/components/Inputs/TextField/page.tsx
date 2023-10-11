import styles from "./page.module.scss";
import React, { useState} from "react";
import { SelectChangeEvent } from "@mui/material";

interface Props {
  name: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const TextField: React.FC<Props> = ({ name, type, onChange }) => {

    return (
        <div className={styles.inputBox}>
            <div className={styles.input}>
                <input
                    type={type}
                    name={name}
                    id={name}
                    onChange={onChange}
                    placeholder=" "
                    aria-label={`Enter your ${name}`}
                    required
                />
                <label htmlFor={name}>{name.toUpperCase()}</label>
            </div>
        </div>
    );
};

export default TextField;
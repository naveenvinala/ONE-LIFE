import styles from "./textField.module.scss";
import React, { useState } from "react";

interface Props {
  name: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Props> = ({ name, type, onChange }) => {
  return (
    <div className={styles.inputs}>
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
    </div>
  );
};

export default TextField;

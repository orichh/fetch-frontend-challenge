import { TextField } from "@mui/material";
import React from "react";

interface InputProps {
  handleChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  label: string;
  value: string;
  revealPassword?: Boolean;
}

export const InputField = ({
  handleChange,
  label,
  value,
  revealPassword = true,
}: InputProps): JSX.Element => {
  return (
    <TextField
      placeholder={label}
      onChange={handleChange}
      label={label}
      sx={{
        display: "flex",
        flex: 10,
        margin: "3%",
        minWidth: "159px",
        width: "100%",
      }}
      type={revealPassword ? "text" : "password"}
      inputProps={{ maxLength: 50 }}
      value={value}
      required
    />
  );
};

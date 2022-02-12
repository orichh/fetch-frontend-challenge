import { Button } from "@mui/material";
import React from "react";

interface ButtonProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
}

export const SubmitButton = ({
  handleClick,
  label,
}: ButtonProps): JSX.Element => {
  return (
    <Button
      sx={{
        minWidth: "160px",
        width: "40%",
        textTransform: "none",
        fontSize: "20px",
        fontWeight: "bold",
      }}
      variant="outlined"
      onClick={handleClick}
      id="form-submit-button"
    >
      {label}
    </Button>
  );
};

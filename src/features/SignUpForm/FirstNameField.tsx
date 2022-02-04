import { TextField } from "@mui/material";

export const FirstNameField = ({ handleChange, firstName }: any) => {
  return (
    <TextField
      placeholder="First Name"
      onChange={handleChange}
      label="First Name"
      fullWidth
      sx={{ display: "flex", flex: 5, margin: "3%", minWidth: "159px" }}
      inputProps={{ maxLength: 50 }}
      value={firstName}
      required
    />
  );
};

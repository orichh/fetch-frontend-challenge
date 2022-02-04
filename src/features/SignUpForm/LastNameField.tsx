import { TextField } from "@mui/material";

export const LastNameField = ({ handleChange, lastName }: any) => {
  return (
    <TextField
      placeholder="Last Name"
      onChange={handleChange}
      label="Last Name"
      fullWidth
      sx={{ display: "flex", flex: 5, margin: "3%", minWidth: "159px" }}
      inputProps={{ maxLength: 50 }}
      value={lastName}
      required
    />
  );
};

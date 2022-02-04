import { TextField } from "@mui/material";

export const EmailField = ({ handleChange, email }: any) => {
  return (
    <TextField
      placeholder="Email"
      onChange={handleChange}
      label="Email"
      sx={{ display: "flex", flex: 10, margin: "3%" }}
      inputProps={{ maxLength: 50 }}
      value={email}
      required
    />
  );
};

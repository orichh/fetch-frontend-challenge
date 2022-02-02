import { TextField } from "@mui/material";

export const PasswordField = ({ handleChange }: any) => {
  return (
    <TextField
      placeholder="Password"
      onChange={handleChange}
      label="Password"
      type="password"
      required
      sx={{ display: "flex", margin: "3%", width: "100%" }}
    />
  );
};

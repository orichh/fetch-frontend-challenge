import { TextField } from "@mui/material";

export const PasswordField = ({
  handleChange,
  revealPassword,
  password,
}: any) => {
  return (
    <TextField
      placeholder="Password"
      onChange={handleChange}
      label="Password"
      type={revealPassword ? "text" : "password"}
      required
      sx={{ display: "flex", margin: "3%", width: "100%" }}
      inputProps={{ maxLength: 50 }}
      value={password}
    />
  );
};

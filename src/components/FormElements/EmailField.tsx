import { Box, TextField } from "@mui/material";

export const EmailField = ({ handleChange }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flex: 10,
        width: "-webkit-fill-available",
      }}
    >
      <TextField
        placeholder="Email"
        onChange={handleChange}
        label="Email"
        sx={{ display: "flex", flex: 10, margin: "3%" }}
        required
      />
    </Box>
  );
};

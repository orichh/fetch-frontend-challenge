import { Box } from "@mui/material";

export const Form = ({ children }: any) => {
  return (
    <Box
      sx={{
        component: "form",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 10,
        width: "60vw",
        maxWidth: "800px",
      }}
    >
      {children}
    </Box>
  );
};

import { Button } from "@mui/material";

export const SubmitButton = ({ handleClick }: any) => {
  return (
    <Button
      sx={{
        minWidth: "160px",
        width: "80%",
        flex: "5",
        textTransform: "none",
        fontSize: "20px",
        fontWeight: "bold",
      }}
      variant="outlined"
      onClick={handleClick}
      id="form-submit-button"
    >
      Sign Up!
    </Button>
  );
};

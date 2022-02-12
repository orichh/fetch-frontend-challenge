import { styled } from "@mui/styles";
import { FormControlLabel, Box } from "@mui/material";

export const StyledFormControlLabel = styled(FormControlLabel)({
  minWidth: "160px",
  width: "80%",
  alignItems: "center",
  flex: "5",
  margin: "3%",
});

export const CheckboxSubmitWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  width: "90%",
  margin: "3%",
});

export const MultiFieldWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap",
});

export const PasswordFieldWrapper = styled(Box)({
  display: "flex",
  width: "100%",
});

export const FormWrapper = styled(Box)({
  component: "form",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 10,
  width: "60vw",
  maxWidth: "800px",
});

export const SignUpWrapper = styled(Box)({
  component: "form",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 10,
  width: "100%",
});

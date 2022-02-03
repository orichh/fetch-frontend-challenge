import { styled } from "@mui/styles";
import { FormControlLabel, Box } from "@mui/material";

export const StyledFormControlLabel = styled(FormControlLabel)({
  minWidth: "160px",
  width: "80%",
  alignItems: "center",
  flex: "5",
});

export const CheckboxSubmitWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
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

export const DropdownWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flex: 10,
  width: "100%",
  flexWrap: "wrap",
});

export const NameFieldWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flex: 10,
  width: "100%",
  flexWrap: "wrap",
});

export const EmailFieldWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flex: 10,
  width: "100%",
});

export const PasswordFieldWrapper = styled(Box)({
  display: "flex",
  width: "100%",
});

export const SignUpWrapper = styled(Box)({
  component: "form",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 10,
  width: "100%",
});

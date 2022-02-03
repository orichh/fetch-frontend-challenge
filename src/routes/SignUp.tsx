import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Checkbox, FormGroup, TextField, Button } from "@mui/material";
import { GenericErrorMessage, Loading } from "../components";
import { StateDropdown } from "../features/StateDropdown";
import { OccupationDropdown } from "../features/OccupationDropdown";
import { getFormData, addUser } from "../api/index";
import { useRequest } from "../hooks";
import {
  StyledFormControlLabel,
  CheckboxSubmitWrapper,
  FormWrapper,
  DropdownWrapper,
  NameFieldWrapper,
  EmailFieldWrapper,
  PasswordFieldWrapper,
  SignUpWrapper,
} from "../features/styles.css";

// Form child components --------------------------------------------------------------------------
const PasswordField = ({ handleChange, revealPassword }: any) => {
  return (
    <TextField
      placeholder="Password"
      onChange={handleChange}
      label="Password"
      type={revealPassword ? "text" : "password"}
      required
      sx={{ display: "flex", margin: "3%", width: "100%" }}
      inputProps={{ maxLength: 50 }}
    />
  );
};

const EmailField = ({ handleChange }: any) => {
  return (
    <TextField
      placeholder="Email"
      onChange={handleChange}
      label="Email"
      sx={{ display: "flex", flex: 10, margin: "3%" }}
      inputProps={{ maxLength: 50 }}
      required
    />
  );
};

const FirstNameField = ({ handleChange }: any) => {
  return (
    <TextField
      placeholder="First Name"
      onChange={handleChange}
      label="First Name"
      fullWidth
      sx={{ display: "flex", flex: 5, margin: "3%", minWidth: "159px" }}
      inputProps={{ maxLength: 50 }}
      required
    />
  );
};

const LastNameField = ({ handleChange }: any) => {
  return (
    <TextField
      placeholder="Last Name"
      onChange={handleChange}
      label="Last Name"
      fullWidth
      sx={{ display: "flex", flex: 5, margin: "3%", minWidth: "159px" }}
      inputProps={{ maxLength: 50 }}
      required
    />
  );
};

const SubmitButton = ({ handleClick }: any) => {
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

// SignUp component -------------------------------------------------------------------------------
interface FormData {
  label: string;
  value: string;
}
export const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [revealPassword, setRevealPassword] = useState<Boolean>(false);
  const [occupation, setOccupation] = useState<string>("");
  const [residentState, setResidentState] = useState<string>("");
  const [states, setStates] = useState<Array<FormData>>([{label: "", value: ""}]); //prettier-ignore
  const [occupations, setOccupations] = useState<Array<FormData>>([{label: "", value: ""}]); //prettier-ignore
  const { data, loading, error } = useRequest(getFormData); //prettier-ignore --- custom hook

  // transform data and pass to setStates and setOccupations
  useEffect(() => {
    if (data) {
      setStates(
        data.states.map((state: { name: string }) => ({
          label: state.name,
          value: state.name,
        }))
      );
      setOccupations(
        data.occupations.map((job: string) => ({ label: job, value: job }))
      );
    }
  }, [data]);

  // handle user input and update state accordingly
  const handleChange = (event: any) => {
    event.preventDefault();
    const field = event.target.placeholder;
    const fieldValue = event.target.value;
    if (field === "First Name") setFirstName(fieldValue);
    if (field === "Last Name") setLastName(fieldValue);
    if (field === "Email") setEmail(fieldValue);
    if (field === "Password") setPassword(fieldValue);
  };

  // handle user submitting form
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // validate all entries have at least one character
    const isValid = [
      firstName,
      lastName,
      email,
      password,
      occupation,
      residentState,
    ].every((input) => input.length > 0);

    const payload = {
      name: firstName + " " + lastName,
      email: email,
      password: password,
      occupation: occupation,
      state: residentState,
    };

    if (isValid) {
      addUser(payload)
        .then((response) => {
          alert("Account created!");
        })
        .catch((error) => {
          alert("Sorry, there was an error...");
        });
    } else {
      alert("Please fill out each field");
    }
  };

  return (
    <>
      <Link to="/">home</Link>
      {loading ? (
        <Loading />
      ) : error ? (
        <GenericErrorMessage />
      ) : (
        <>
          <SignUpWrapper>
            <h1 id="signup">Create your free account</h1>

            <FormWrapper>
              <NameFieldWrapper>
                <FirstNameField handleChange={handleChange} />
                <LastNameField handleChange={handleChange} />
              </NameFieldWrapper>

              <EmailFieldWrapper>
                <EmailField handleChange={handleChange} />
              </EmailFieldWrapper>

              <DropdownWrapper>
                <StateDropdown
                  setResidentState={setResidentState}
                  states={states}
                />
                <OccupationDropdown
                  setOccupation={setOccupation}
                  occupations={occupations}
                />
              </DropdownWrapper>

              <PasswordFieldWrapper>
                <PasswordField
                  handleChange={handleChange}
                  revealPassword={revealPassword}
                />
              </PasswordFieldWrapper>

              <CheckboxSubmitWrapper>
                <FormGroup>
                  <StyledFormControlLabel
                    control={<Checkbox onChange={() => setRevealPassword(!revealPassword)}/>} //prettier-ignore
                    label="Show password"
                  />
                </FormGroup>
                <SubmitButton handleClick={handleSubmit} />
              </CheckboxSubmitWrapper>
            </FormWrapper>
          </SignUpWrapper>
        </>
      )}
    </>
  );
};

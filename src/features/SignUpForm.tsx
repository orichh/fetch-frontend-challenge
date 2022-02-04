import { useState, useEffect } from "react";
import { Checkbox, FormGroup, TextField, Button } from "@mui/material";
import { GenericErrorMessage, Loading } from "../components";
import { StateDropdown, OccupationDropdown } from ".";
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
} from "./styles.css";

// Form child components --------------------------------------------------------------------------
const PasswordField = ({ handleChange, revealPassword, password }: any) => {
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

const EmailField = ({ handleChange, email }: any) => {
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

const FirstNameField = ({ handleChange, firstName }: any) => {
  return (
    <TextField
      placeholder="First Name"
      onChange={handleChange}
      label="First Name"
      fullWidth
      sx={{ display: "flex", flex: 5, margin: "3%", minWidth: "159px" }}
      inputProps={{ maxLength: 50 }}
      value={firstName}
      required
    />
  );
};

const LastNameField = ({ handleChange, lastName }: any) => {
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

// SignUpForm component -------------------------------------------------------------------------------
interface FormData {
  label: string;
  value: string;
}
export const SignUpForm = () => {
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
  const [formSubmitted, setFormSubmitted] = useState<Boolean>(false);

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

  // reset form input states after user successfully signs up
  useEffect(() => {
    if (formSubmitted === true) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setOccupation("");
      setResidentState("");
      setRevealPassword(false);
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

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
          setFormSubmitted(true);
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
                <FirstNameField
                  handleChange={handleChange}
                  firstName={firstName}
                />
                <LastNameField
                  handleChange={handleChange}
                  lastName={lastName}
                />
              </NameFieldWrapper>

              <EmailFieldWrapper>
                <EmailField handleChange={handleChange} email={email} />
              </EmailFieldWrapper>

              <DropdownWrapper>
                <StateDropdown
                  setResidentState={setResidentState}
                  states={states}
                  resetDropdown={formSubmitted}
                />
                <OccupationDropdown
                  setOccupation={setOccupation}
                  occupations={occupations}
                  resetDropdown={formSubmitted}
                />
              </DropdownWrapper>

              <PasswordFieldWrapper>
                <PasswordField
                  handleChange={handleChange}
                  revealPassword={revealPassword}
                  password={password}
                />
              </PasswordFieldWrapper>

              <CheckboxSubmitWrapper>
                <FormGroup>
                  <StyledFormControlLabel
                    control={<Checkbox onChange={() => setRevealPassword(!revealPassword)}/>} //prettier-ignore
                    label="Show password"
                    key={formSubmitted.toString()}
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

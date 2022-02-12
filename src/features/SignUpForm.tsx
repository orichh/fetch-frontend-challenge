import { useState, useEffect } from "react";
import { Checkbox, FormGroup, TextField, Button } from "@mui/material";
import {
  GenericErrorMessage,
  Loading,
  SelectDropdown,
  InputField,
} from "../components";
import { getRequest, postRequest } from "../api/index";
import { useRequest } from "../hooks";
import {
  StyledFormControlLabel,
  CheckboxSubmitWrapper,
  FormWrapper,
  PasswordFieldWrapper,
  SignUpWrapper,
  MultiFieldWrapper,
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
  const [formSubmitted, setFormSubmitted] = useState<Boolean>(false);
  const { data, loading, error } = useRequest(getRequest, "form"); //prettier-ignore --- custom hook

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
      postRequest("form", payload)
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
              <MultiFieldWrapper>
                <InputField
                  handleChange={handleChange}
                  label="First Name"
                  value={firstName}
                />
                <InputField
                  handleChange={handleChange}
                  label="Last Name"
                  value={lastName}
                />
              </MultiFieldWrapper>

              <MultiFieldWrapper>
                <InputField
                  handleChange={handleChange}
                  label="Email"
                  value={email}
                />
              </MultiFieldWrapper>

              <MultiFieldWrapper>
                <SelectDropdown
                  setField={setResidentState}
                  selectOptions={states}
                  resetDropdown={formSubmitted}
                  label={"State"}
                />
                <SelectDropdown
                  setField={setOccupation}
                  selectOptions={occupations}
                  resetDropdown={formSubmitted}
                  label={"Occupation"}
                />
              </MultiFieldWrapper>

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

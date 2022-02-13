import { useState, useEffect } from "react";
import { getRequest, postRequest } from "../api/index";
import { useRequest } from "../hooks";
import { Checkbox, FormGroup } from "@mui/material";
import {
  GenericErrorMessage,
  Loading,
  SelectDropdown,
  InputField,
  SubmitButton,
} from "../components";
import {
  StyledFormControlLabel,
  CheckboxSubmitWrapper,
  FormWrapper,
  PasswordFieldWrapper,
  SignUpWrapper,
  MultiFieldWrapper,
} from "./styles.css";

interface FormData {
  label: string;
  value: string;
}
export const SignUpForm = (): JSX.Element => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [revealPassword, setRevealPassword] = useState<Boolean>(false);
  const [occupations, setOccupations] = useState<Array<FormData>>([{label: "", value: ""}]); //prettier-ignore
  const [occupation, setOccupation] = useState<string>("");
  const [states, setStates] = useState<Array<FormData>>([{label: "", value: ""}]); //prettier-ignore
  const [residentState, setResidentState] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<Boolean>(false);
  const [apiDataError, setApiDataError] = useState<Boolean>(false);
  const { data, loading, error } = useRequest(getRequest, "form"); //prettier-ignore --- custom hook

  // transform data and pass to setStates and setOccupations
  useEffect(() => {
    if (data) {
      try {
        setStates(
          data.states.map((state: { name: string }) => ({
            label: state.name,
            value: state.name,
          }))
        );
        setOccupations(
          data.occupations.map((job: string) => ({
            label: job,
            value: job,
          }))
        );
      } catch {
        setApiDataError(true);
      }
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
      ) : error || apiDataError ? (
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
                <InputField
                  handleChange={handleChange}
                  label="Password"
                  value={password}
                  revealPassword={revealPassword}
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
                <SubmitButton handleClick={handleSubmit} label="Sign Up!" />
              </CheckboxSubmitWrapper>
            </FormWrapper>
          </SignUpWrapper>
        </>
      )}
    </>
  );
};

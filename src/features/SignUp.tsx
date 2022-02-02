import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Checkbox, FormGroup, TextField } from "@mui/material";
import { GenericErrorMessage, Loading } from "../components";
import { StateDropdown } from "./StateDropdown";
import { OccupationDropdown } from "./OccupationDropdown";
import {
  SubmitButton,
  StyledFormControlLabel,
  CheckboxSubmitWrapper,
  FormWrapper,
  DropdownWrapper,
  NameFieldWrapper,
  EmailFieldWrapper,
  PasswordFieldWrapper,
  SignUpWrapper,
} from "./styles.css";

const PasswordField = ({ handleChange }: any) => {
  return (
    <TextField
      placeholder="Password"
      onChange={handleChange}
      label="Password"
      type="password"
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

// GraphQL Queries & Mutations --------------------------------------------------------------------
const GET_FORM_DATA_OPTIONS = gql`
  query Form {
    data @rest(type: "FormData", path: "/form", method: "GET") {
      occupations
      states {
        label: name
        value: name
      }
    }
  }
`;

const ADD_USER = gql`
  fragment Payload on REST {
    name: String
    email: String
    password: String
    occupation: String
    state: String
  }
  mutation AddUser($input: Payload!) {
    user(input: $input) @rest(type: "User", method: "POST", path: "/form") {
      nawefawefa: a3af3f
    }
  }
`;

// SignUp component -------------------------------------------------------------------------------
export const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [residentState, setResidentState] = useState<string>("");
  const { data, loading, error } = useQuery(GET_FORM_DATA_OPTIONS);
  const [addUser, { data: data1, loading: loading1, error: error1 }] = useMutation(ADD_USER); //prettier-ignore

  if (data1)
    console.log("🚀 ~ file: SignUp.tsx ~ line 110 ~ SignUp ~ data1", data1);
  if (loading1)
    console.log(
      "🚀 ~ file: SignUp.tsx ~ line 111 ~ SignUp ~ loading1",
      loading1
    );
  if (error1)
    console.log("🚀 ~ file: SignUp.tsx ~ line 112 ~ SignUp ~ error1", error1);

  const handleChange = (event: any) => {
    event.preventDefault();
    const field = event.target.placeholder;
    const fieldValue = event.target.value;
    if (field === "First Name") setFirstName(fieldValue);
    if (field === "Last Name") setLastName(fieldValue);
    if (field === "Email") setEmail(fieldValue);
    if (field === "Password") setPassword(fieldValue);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("first name", firstName);
    console.log("last name", lastName);
    console.log("email", email);
    console.log("password", password);
    console.log("first name", occupation);
    console.log("first name", residentState);
    const payload = {
      name: firstName + " " + lastName,
      email: email,
      password: password,
      occupation: occupation,
      state: residentState,
    };
    addUser({ variables: { input: payload } });
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
            <h1>Sign up with a free account.</h1>
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
                  states={data.data.states}
                />
                <OccupationDropdown
                  setOccupation={setOccupation}
                  occupations={data.data.occupations}
                />
              </DropdownWrapper>
              <PasswordFieldWrapper>
                <PasswordField handleChange={handleChange} />
              </PasswordFieldWrapper>
              <CheckboxSubmitWrapper>
                <FormGroup>
                  <StyledFormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Show password"
                  />
                </FormGroup>
                <SubmitButton onClick={handleSubmit}>
                  Create my account!
                </SubmitButton>
              </CheckboxSubmitWrapper>
            </FormWrapper>
          </SignUpWrapper>
        </>
      )}
    </>
  );
};

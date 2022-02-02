import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Checkbox, FormGroup, TextField } from "@mui/material";
import { StateDropdown } from "./StateDropdown";
import { OccupationDropdown } from "./OccupationDropdown";
import { GenericErrorMessage, Loading } from "../components";
import { useQuery, gql } from "@apollo/client";
import {
  SubmitButton,
  StyledFormControlLabel,
  CheckboxSubmitWrapper,
  FormWrapper,
  DropdownWrapper,
  NameFieldWrapper,
  SignUpWrapper,
} from "./styles.css";

const query = gql`
  query Form {
    data @rest(type: "Form", path: "form") {
      occupations
      states {
        label: name
        value: name
      }
    }
  }
`;

export const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [residentState, setResidentState] = useState<string>("");
  const { loading, error, data } = useQuery(query);

  const handleChange = (e: any) => {
    e.preventDefault();
    console.log("hit", e.target);
    // setFirstName(e.target.value);
  };

  useEffect(() => {
    console.log("resident state changed", residentState);
  }, [residentState]);

  const handleSubmit = () => {
    console.log("first name", firstName);
    console.log("first name", lastName);
    console.log("first name", email);
    console.log("first name", password);
    console.log("first name", occupation);
    console.log("first name", residentState);
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
            <h1>Create your free account.</h1>
            <FormWrapper>
              <NameFieldWrapper>
                <FirstNameField handleChange={handleChange} />
                <LastNameField handleChange={handleChange} />
              </NameFieldWrapper>

              <EmailField handleChange={handleChange} />
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
              <Box sx={{ display: "flex", width: "100%" }}>
                <PasswordField handleChange={handleChange} />
              </Box>
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

const PasswordField = ({ handleChange }: any) => {
  return (
    <TextField
      placeholder="Password"
      onChange={handleChange}
      label="Password"
      type="password"
      required
      sx={{ display: "flex", margin: "3%", width: "100%" }}
    />
  );
};

const EmailField = ({ handleChange }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flex: 10,
        width: "100%",
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

const FirstNameField = ({ handleChange }: any) => {
  return (
    <TextField
      placeholder="First Name"
      onChange={handleChange}
      label="First Name"
      fullWidth
      sx={{ display: "flex", flex: 5, margin: "3%", minWidth: "159px" }}
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
      required
    />
  );
};

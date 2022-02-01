import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField, Box, Button } from "@mui/material";
import {
  GenericErrorMessage,
  OccupationDropdown,
  StateDropdown,
  Loading,
} from "../components";
import { useQuery, gql } from "@apollo/client";

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

export const SignUpForm = () => {
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
          <h1>Create your free account.</h1>
          <Box
            sx={{
              component: "form",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 10,
              maxWidth: "80%",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", flex: 10 }}>
              <FirstNameField handleChange={handleChange} />
              <LastNameField handleChange={handleChange} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", flex: 10 }}>
              <EmailField handleChange={handleChange} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", flex: 10 }}>
              <StateDropdown
                setResidentState={setResidentState}
                states={data.data.states}
              />
              <OccupationDropdown
                setOccupation={setOccupation}
                occupations={data.data.occupations}
              />
            </Box>
            <Box>
              <PasswordField handleChange={handleChange} />
            </Box>
            <Button onClick={handleSubmit}>Create my account!</Button>
          </Box>
        </>
      )}
    </>
  );
};

const FirstNameField = ({ handleChange }: any) => {
  return (
    <TextField
      placeholder="First Name"
      onChange={handleChange}
      label="First Name"
      margin="normal"
      style={{ display: "flex", flex: 5 }}
    />
  );
};

const LastNameField = ({ handleChange }: any) => {
  return (
    <TextField
      placeholder="Last Name"
      onChange={handleChange}
      label="Last Name"
      margin="normal"
      style={{ display: "flex", flex: 5 }}
    />
  );
};

const EmailField = ({ handleChange }: any) => {
  return (
    <TextField
      placeholder="Email"
      onChange={handleChange}
      label="Email"
      margin="normal"
      style={{ display: "flex", flex: 10 }}
    />
  );
};

const PasswordField = ({ handleChange }: any) => {
  return (
    <TextField
      placeholder="Password"
      onChange={handleChange}
      label="Password"
      margin="normal"
      type="password"
    />
  );
};

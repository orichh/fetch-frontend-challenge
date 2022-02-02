import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Box,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
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
          <Box
            sx={{
              component: "form",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 10,
              width: "100%",
            }}
          >
            <h1>Create your free account.</h1>
            <Box
              sx={{
                component: "form",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 10,
                width: "60vw",
                maxWidth: "800px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 10,
                  width: "100%",
                  flexWrap: "wrap",
                }}
              >
                <FirstNameField handleChange={handleChange} />
                <LastNameField handleChange={handleChange} />
              </Box>

              <EmailField handleChange={handleChange} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 10,
                  width: "100%",
                  flexWrap: "wrap",
                }}
              >
                <StateDropdown
                  setResidentState={setResidentState}
                  states={data.data.states}
                />
                <OccupationDropdown
                  setOccupation={setOccupation}
                  occupations={data.data.occupations}
                />
              </Box>
              <Box sx={{ display: "flex", width: "100%" }}>
                <PasswordField handleChange={handleChange} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Show password"
                    sx={{
                      minWidth: "160px",
                      width: "80%",
                      alignItems: "center",
                      flex: "5",
                    }}
                  />
                </FormGroup>
                <Button
                  onClick={handleSubmit}
                  sx={{
                    minWidth: "160px",
                    width: "80%",
                    alignItems: "center",
                    flex: "5",
                  }}
                >
                  Create my account!
                </Button>
              </Box>
            </Box>
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

const EmailField = ({ handleChange }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flex: 10,
        width: "-webkit-fill-available",
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

const PasswordField = ({ handleChange }: any) => {
  return (
    <TextField
      placeholder="Password"
      onChange={handleChange}
      label="Password"
      type="password"
      fullWidth
      required
      sx={{ display: "flex", margin: "3%" }}
    />
  );
};

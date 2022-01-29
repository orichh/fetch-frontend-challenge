import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField, Box } from "@mui/material";
import { Test } from "./GraphQL";

// TODO: The state management here is really messy and kind of a lot.
// Is there a better way to list all these out?
// What about breaking it up?
export const Form = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [apiError, setApiError] = useState<boolean>(false);

  const handleChange = (e: any) => {
    e.preventDefault();
    // console.log("hit");
    // setFirstName(e.target.value);
  };

  return (
    <>
      <Link to="/">home</Link>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <Box style={{ display: "flex" }}>
          <TextField placeholder="First Name" onChange={handleChange} />
          <TextField placeholder="Last Name" onChange={handleChange} />
        </Box>
        <Box>
          <TextField placeholder="Email" onChange={handleChange} />
        </Box>
        <Box>
          <TextField placeholder="Password" onChange={handleChange} />
        </Box>
        <Test />
      </form>
    </>
  );
};

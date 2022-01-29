import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
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
      <Test />
      <Link to="/">home</Link>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <TextField placeholder="First Name" onChange={handleChange} />
        <TextField placeholder="Last Name" onChange={handleChange} />
        <TextField placeholder="Email" onChange={handleChange} />
        <TextField placeholder="Password" onChange={handleChange} />
        <TextField placeholder="Confirm Password" onChange={handleChange} />
      </form>
    </>
  );
};

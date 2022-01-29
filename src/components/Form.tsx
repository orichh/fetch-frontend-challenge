import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getOccupationAndState } from "../api";
import { DropdownMenu } from "./DropdownMenu";
import { TextField } from "@mui/material";
import { Test, getData } from "./GraphQL";

export const Form = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [occupationList, setOccupationList] = useState<Array<string>>([]);
  const [state, setState] = useState<string>("");
  const [stateList, setStateList] = useState<
    Array<{ name: string; abbreviation: string }>
  >([]);
  const [apiError, setApiError] = useState<boolean>(false);
  const [graphqlData, setGraphqlData] = useState();

  useEffect(() => {
    getOccupationAndState()
      .then((response) => {
        // console.log(
        //   "🚀 ~ file: Form.tsx ~ line 22 ~ .then ~ response",
        //   response
        // );

        setOccupationList(response.data.occupations);
        setStateList(response.data.states);
      })
      .catch((error) => {
        console.log("🚀 ~ file: Form.tsx ~ line 19 ~ useEffect ~ error", error);
      });
  }, []);

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
        <DropdownMenu
          arrayOfElements={occupationList}
          selectLabel={"Occupation"}
        />
        {/* <DropdownMenu arrayOfElements={graphqlData} selectLabel={"State"} /> */}
      </form>
    </>
  );
};

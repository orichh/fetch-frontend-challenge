import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getOccupationAndState } from "../api";
import { DropdownMenu } from "./DropdownMenu";

export const Form = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [occupationList, setOccupationList] = useState<Array<string>>([]);
  const [state, setState] = useState<string>("");
  const [stateList, setStateList] = useState<string>("");
  const [apiError, setApiError] = useState<boolean>(false);

  useEffect(() => {
    console.log("hit");
    getOccupationAndState()
      .then((response) => {
        setOccupationList(response.data.occupations);
        setStateList(response.data.states);
      })
      .catch((error) => {
        console.log("🚀 ~ file: Form.tsx ~ line 19 ~ useEffect ~ error", error);
      });
  }, []);

  useEffect(() => {
    console.log("first name", firstName);
  }, [firstName]);

  const handleChange = (e: any) => {
    e.preventDefault();
    // setFirstName(e.target.value);
  };

  return (
    <>
      <DropdownMenu arrayOfStrings={occupationList} selectLabel={"select"} />
      <Link to="/">home</Link>
      <form>
        <label>
          First Name{" "}
          <input type="text" value={firstName} onChange={handleChange}></input>
        </label>
        <label>
          Last Name{" "}
          <input type="text" value={lastName} onChange={handleChange}></input>
        </label>
        <label>
          Email{" "}
          <input type="text" value={email} onChange={handleChange}></input>
        </label>
        <label>
          Password{" "}
          <input
            type="password"
            value={password}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Confirm Password{" "}
          <input
            type="password"
            value={confirmPassword}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Occupation{" "}
          <input type="text" value={occupation} onChange={handleChange}></input>
        </label>
        <label>
          State{" "}
          <input type="text" value={state} onChange={handleChange}></input>
        </label>
      </form>
    </>
  );
};

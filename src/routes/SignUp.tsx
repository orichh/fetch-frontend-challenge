import { Link } from "react-router-dom";
import { SignUpForm } from "../features";

export const SignUp = () => {
  return (
    <>
      <Link to="/">home</Link>
      <SignUpForm />
    </>
  );
};

import { Link } from "react-router-dom";
import { SignUpForm } from "../features";

// SignUp component -------------------------------------------------------------------------------
export const SignUp = () => {
  return (
    <>
      <Link to="/">home</Link>
      <SignUpForm />
    </>
  );
};

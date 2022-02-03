import { Link } from "react-router-dom";

export const Home = (props: any) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <br />
      <Link to="/signup" id="signup-link">
        sign up!
      </Link>
    </div>
  );
};

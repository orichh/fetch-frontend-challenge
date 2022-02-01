import { Link } from "react-router-dom";

export const Home = (props: any) => {
  console.log("🚀 ~ file: Home.tsx ~ line 4 ~ Home ~ props", props);

  return (
    <div>
      welcome
      <br />
      <Link to="/signup">sign up!</Link>
    </div>
  );
};

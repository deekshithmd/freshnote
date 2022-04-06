import { Link } from "react-router-dom";
export const ErrorPage = () => {
  return (
    <>
      <h1>404 !!! Your page not found...</h1>
      <Link to="/notes">Click here to go to homepage</Link>
    </>
  );
};

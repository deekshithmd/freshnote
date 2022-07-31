import "./authentication.css";
import { getCredentials, getTestData } from "../../utils";
import axios from "axios";
import { useAuth } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const { setToken, setUser } = useAuth();

  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const testLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", getTestData());
      if (response.data.encodedToken) {
        localStorage.setItem(
          "login",
          JSON.stringify(response.data.encodedToken)
        );
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
        setUser(response.data.foundUser);
        setToken(true);
        navigate("/notes");
      }
    } catch (e) {
      setError(true);
      navigate("/login");
    }
  };

  const handleLogin = async (event:any) => {
    try {
      event.preventDefault();
      const { email, password } = event.target.elements;
      const response = await axios.post(
        "/api/auth/login",
        getCredentials(email, password)
      );
      if (response.data.encodedToken) {
        localStorage.setItem(
          "login",
          JSON.stringify(response.data.encodedToken)
        );
        setToken(true);
        navigate("/notes");
      }
    } catch (e) {
      setError(true);
      navigate("/login");
    }
  };
  return (
    <div className="form">
      <div className="form-data">
        {error && <h3>Wrong credentials</h3>}
        <h2 className="margin-b">Login</h2>
        <form autoComplete="off" onSubmit={handleLogin}>
          <div className="input input-labeled outlined margin">
            <label className="label">Enter Email Address</label>
            <input type="email" name="email" placeholder="freshbuy@gmail.com" />
          </div>
          <div className="input input-labeled outlined margin">
            <label className="label">Enter Password</label>
            <input type="password" name="password" placeholder="******" />
          </div>
          <section className="handle">
            <label className="text-md">
              <input type="checkbox" className="margin-r" name="remember" />
              Remember me
            </label>
            <Link to="" className="text-md forgot-pwd text-primary margin-l">
              Forgot password?
            </Link>
          </section>
          <input
            type="submit"
            className="btn btn-solid-primary margin authenticate-login"
            value="Login"
          />
        </form>
        <button className="btn btn-solid-primary margin" onClick={testLogin}>
          Test User Login
        </button>
        <p className="text-md">
          <Link to="/signup" className=" link-style-none">
            Don't have Account?, Click here
            <i className="fa fa-angle-right margin-l"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}

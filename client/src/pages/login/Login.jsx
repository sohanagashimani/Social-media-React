import { useContext, useRef } from "react";
import "./login.css";
import { LoginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isfetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    LoginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">My-Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on My-Social.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isfetching}>
              {isfetching ? (
                <CircularProgress color="inherit" size="35px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isfetching ? (
                <CircularProgress color="inherit" size="35px" />
              ) : (
                " Create Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

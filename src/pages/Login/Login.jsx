import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useAuth } from "../../contexts/auth-context";
const Login = () => {
  const { authDispatch, authState, login, googleSignin } = useAuth();
  const { email, password, error } = authState;
  const navigate = useNavigate();
  const loginHandler = async (event) => {
    event.preventDefault();
    authDispatch({ type: "CLEAR_ERROR" });
    try {
      await login(email, password);
      navigate("/home");
    } catch (error) {
      authDispatch({ type: "ERROR", payload: error.message });
    }
  };

  const googleSigninHandler = async (event) => {
    event.preventDefault();
    try {
      await googleSignin();
      navigate("/home");
    } catch (error) {
      authDispatch({ type: "ERROR", payload: error.message });
    }
  };
  return (
    <div className={classes.loginFormContainer}>
      <form className={classes.form} onSubmit={loginHandler}>
        <p className={classes.formTitle}>Sign in to your account</p>
        {error && (
          <p variant="danger" className={classes.errorAlert}>
            {error}
          </p>
        )}
        <div className={classes.inputContainer}>
          <input
            type="email"
            placeholder="Enter email"
            onChange={(event) =>
              authDispatch({ type: "E_MAIL", payload: event.target.value })
            }
          />
          <span></span>
        </div>
        <div className={classes.inputContainer}>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(event) =>
              authDispatch({ type: "PASSWORD", payload: event.target.value })
            }
          />
        </div>

        <button type="submit" className={classes.submit}>
          Login
        </button>
        <button type="submit" className={classes.googleButton}>
          <GoogleButton type="light" onClick={googleSigninHandler} />
        </button>

        <p className={classes.signupLink}>
          No account?
          <Link to="/signup"> Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

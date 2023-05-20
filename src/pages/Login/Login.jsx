import classes from "./Login.module.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={classes.loginFormContainer}>
      <form className={classes.form}>
        <p className={classes.formTitle}>Sign in to your account</p>
        <div className={classes.inputContainer}>
          <input type="email" placeholder="Enter email" />
          <span></span>
        </div>
        <div className={classes.inputContainer}>
          <input type="password" placeholder="Enter password" />
        </div>
        <button type="submit" className={classes.submit}>
          Login
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

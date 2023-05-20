import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className={classes.formContainer}>
      <form className={classes.form}>
        <p className={classes.title}>Register </p>
        <p className={classes.message}>
          Signup now and get full access to our app.{" "}
        </p>
        <div className={classes.flex}>
          <label>
            <input
              required=""
              placeholder="First Name"
              type="text"
              class={classes.input}
            />
          </label>

          <label>
            <input
              required=""
              placeholder="Last Name"
              type="text"
              class={classes.input}
            />
          </label>
        </div>
        <label>
          <input
            required=""
            placeholder="e-mail"
            type="text"
            class={classes.input}
          />
        </label>

        <label>
          <input
            required=""
            placeholder="password"
            type="text"
            class={classes.input}
          />
        </label>

        <label>
          <input
            required=""
            placeholder="confirm-password"
            type="text"
            class={classes.input}
          />
        </label>
        <button className={classes.submit}>Sign up</button>
        <p className={classes.signin}>
          Already have an Account? <Link to="/login"> Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

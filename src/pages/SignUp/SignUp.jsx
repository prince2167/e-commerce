import GoogleButton from "react-google-button";
import classes from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
const SignUp = () => {
  const { authDispatch, authState, signUp, googleSignin } = useAuth();
  const { email, password, error, confirmPassword } = authState;
  const navigate = useNavigate();
  const singUpHandler = async (event) => {
    event.preventDefault();
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (error) {
      authDispatch({ type: "ERROR", payload: error.message });
    }
  };

  const googleSignupHandler = async (event) => {
    event.preventDefault();

    try {
      if (password === confirmPassword) {
        await googleSignin();
        navigate("/");
      } else {
        alert("Password does not match");
      }
    } catch (error) {
      authDispatch({ type: "ERROR", payload: error.message });
    }
  };
  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={singUpHandler}>
        <p className={classes.title}>Register </p>
        <p className={classes.message}>
          Signup now and get full access to our app.{" "}
        </p>
        {error && (
          <p variant="danger" className={classes.errorAlert}>
            {error}
          </p>
        )}
        <div className={classes.flex}>
          <label>
            <input
              required
              placeholder="First Name"
              type="text"
              className={classes.input}
              onChange={(event) =>
                authDispatch({
                  type: "FIRST_NAME",
                  payload: event.target.value,
                })
              }
            />
          </label>

          <label>
            <input
              required
              placeholder="Last Name"
              type="text"
              className={classes.input}
              onChange={(event) =>
                authDispatch({ type: "LAST_NAME", payload: event.target.value })
              }
            />
          </label>
        </div>
        <label>
          <input
            required
            placeholder="e-mail"
            type="text"
            className={classes.input}
            onChange={(event) =>
              authDispatch({ type: "E_MAIL", payload: event.target.value })
            }
          />
        </label>

        <label>
          <input
            required
            placeholder="password"
            type="password"
            className={classes.input}
            onChange={(event) =>
              authDispatch({ type: "PASSWORD", payload: event.target.value })
            }
          />
        </label>

        <label>
          <input
            required
            placeholder="confirm-password"
            type="password"
            className={classes.input}
            onChange={(event) =>
              authDispatch({
                type: "CONFIRM_PASSWORD",
                payload: event.target.value,
              })
            }
          />
        </label>
        <button type="submit" className={classes.submit}>
          Sign up
        </button>
        <button type="submit" className={classes.googleButton}>
          <GoogleButton type="light" onClick={googleSignupHandler} />
        </button>
        <p className={classes.signin}>
          Already have an Account? <Link to="/login"> Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

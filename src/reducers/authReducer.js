export const initialState = {
  user: "",
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  error: "",
};

export const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CURRENT_USER": {
      return {
        ...state,
        user: payload,
      };
    }
    case "E_MAIL": {
      return {
        ...state,
        email: payload,
      };
    }
    case "PASSWORD": {
      return {
        ...state,
        password: payload,
      };
    }
    case "CONFIRM_PASSWORD": {
      return {
        ...state,
        confirmPassword: payload,
      };
    }
    case "FIRST_NAME": {
      return {
        ...state,
        firstName: payload,
      };
    }
    case "LAST_NAME": {
      return {
        ...state,
        lastName: payload,
      };
    }
    case "ERROR": {
      return {
        ...state,
        error: payload,
      };
    }
    case "CLEAR_ERROR": {
      return {
        ...state,
        error: initialState.error,
      };
    }

    default:
      return { ...state };
  }
};

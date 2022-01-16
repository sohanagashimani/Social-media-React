const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isfetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isfetching: false,
        error: false,
      };
    case "LOGIN_FAIL":
      return {
        user: null,
        isfetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;

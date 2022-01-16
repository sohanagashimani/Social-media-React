import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "61aeffdeed39e1c0a126f13c",
    username: "DArshannew",
    email: "fdsnew@gmail.com",
    profilePic: "",
    coverPic: "",
    followers: [],
    following: [
      "61ac5ff9e42a35dc73bad6ec",
      "61ac663d52f1d7653edd0a3f",
      "61ac676052f1d7653edd0a4f",
    ],
    isAdmin: false,
    createdAt: "2021-12-07T06:31:58.004Z",
    __v: 0,
  },
  isfetching: false,
  error: false,
};
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isfetching: state.isfetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

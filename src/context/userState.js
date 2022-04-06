import React, { useReducer } from "react";
import userContext from "./userContext";
import userReducer from "./userReducer";

import { SET_FLAG_JWT } from "../types/index.js";

const UserState = (props) => {
  const initialState = {
    JWT_Flag: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const setJWTFlag = (flagState) => {
    dispatch({
      type: SET_FLAG_JWT,
      payload: flagState,
    });
  };

  const checkJWT = (flagState) => {
    // aca deberia pegarle al endpoint de Self (cuando esté)
    if (localStorage.getItem("token")) {
      setJWTFlag(flagState);
    } else {
      window.location.href = "/auth/login";
    }
  };

  const log_out = () => {
    localStorage.clear();
    window.location.href = "/auth/login";
  };

  return (
    <userContext.Provider
      value={{
        JWT_Flag: state.JWT_Flag,
        log_out,
        checkJWT,
        setJWTFlag,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;

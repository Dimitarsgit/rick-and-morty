import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, connect } from "react-redux";
import AuthForm from "../../../components/form/AuthForm";
import { signIn, signUp, setMessage } from "../../../store/slice/auth";
import { SIGN_IN, SIGN_UP } from "./constants";

const AuthContainer = ({ message, location, user, history }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [authType, setAuthType] = useState("");
  const [redirect, setRedirect] = useState({ to: "", title: "" });

  useEffect(() => {
    if (location.pathname === "/sign-in") {
      setAuthType(SIGN_IN);
      setRedirect({ to: "/sign-up", title: SIGN_UP });
    }
    if (location.pathname === "/sign-up") {
      setAuthType(SIGN_UP);
      setRedirect({ to: "/sign-in", title: SIGN_IN });
    }
    setUsername("");
    dispatch(setMessage(""));
  }, [dispatch, location.pathname]);

  useEffect(() => {
    if (user) history.push("/episode");
  }, [history, user]);

  const handleInput = ({ target: { value } }) => {
    if (!/[^a-z]/i.test(value) || value === "") {
      setUsername(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === "/sign-in") dispatch(signIn(username.trim()));

    if (location.pathname === "/sign-up") dispatch(signUp(username.trim()));
  };

  return (
    <AuthForm
      handleSubmit={handleSubmit}
      handleInput={handleInput}
      message={message}
      value={username}
      title={authType}
      redirect={redirect}
    />
  );
};

AuthContainer.defaultProps = {
  user: null,
};

AuthContainer.propTypes = {
  message: PropTypes.string.isRequired,
  user: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(({ auth }) => auth)(withRouter(AuthContainer));

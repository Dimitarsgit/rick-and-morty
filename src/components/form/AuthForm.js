import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FormFeedback,
  FormGroup,
  Button,
  Input,
  Label,
  Form,
} from "reactstrap";

const AuthForm = ({
  handleSubmit,
  handleInput,
  redirect,
  message,
  value,
  title,
}) => {
  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <h1>{title}</h1>
      <Link to={redirect.to}>{redirect.title}</Link>
      <Form
        inline
        style={{ justifyContent: "center", alignItems: "baseline" }}
        onSubmit={handleSubmit}
      >
        <FormGroup className="position-relative">
          <Label for="username" className="mr-sm-2">
            Username:
          </Label>
          <Input
            type="text"
            name="username"
            id="username"
            value={value}
            onChange={handleInput}
            invalid={!!message.length}
          />

          <FormFeedback>{message}</FormFeedback>
        </FormGroup>
      </Form>
      <Button
        color="success"
        style={{ marginTop: "15px" }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

AuthForm.propTypes = {
  redirect: PropTypes.shape({
    to: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default AuthForm;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Jumbotron, Container } from "reactstrap";

const ErrorComponent = ({ message, url }) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{message}</h1>
          <p className="lead" style={{ textAlign: "center" }}>
            You can go back to what you ware doing from
            <Link to={url}> HERE.</Link>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ErrorComponent;

/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Layout from "../layout/Layout";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/sign-in" />
        );
      }}
    />
  );
};

PrivateRoute.defaultProps = {
  user: null,
};
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  user: PropTypes.string,
};

export default connect(({ auth }) => auth)(PrivateRoute);

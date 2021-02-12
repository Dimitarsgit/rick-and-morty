import React from "react";
import PropTypes from "prop-types";
import { CardColumns } from "reactstrap";
import SpinnerComponent from "../spinner";

const Cards = ({ items, propName, Component, loading }) => {
  if (loading) return <SpinnerComponent />;
  return (
    <CardColumns style={{ margin: "2%" }}>
      {items.map((item, index) => (
        <Component {...{ [propName]: item }} key={item.id || index} />
      ))}
    </CardColumns>
  );
};

Cards.defaultProps = {
  loading: false,
};

Cards.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
  Component: PropTypes.func.isRequired,
  propName: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default Cards;

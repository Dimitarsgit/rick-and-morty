import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

const LocationOverview = ({ created, dimension, name, type }) => (
  <>
    <Container>
      <h1 style={{ textAlign: "center" }}>{name}</h1>
      <h4 style={{ textAlign: "center" }}>
        Dimension:
        {dimension}
      </h4>
      <h4 style={{ textAlign: "center" }}>
        created:
        {created}
      </h4>
      <h4 style={{ textAlign: "center" }}>
        Type:
        {type}
      </h4>
    </Container>
  </>
);

LocationOverview.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
};

export default LocationOverview;

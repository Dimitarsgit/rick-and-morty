import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

const EpisodeOverview = ({ name, episode, created, airDate }) => (
  <>
    <Container>
      <h1 style={{ textAlign: "center" }}>{name}</h1>
      <h4 style={{ textAlign: "center" }}>
        Episode:
        {episode}
      </h4>
      <h4 style={{ textAlign: "center" }}>
        created:
        {created}
      </h4>
      <h4 style={{ textAlign: "center" }}>
        Air date:
        {airDate}
      </h4>
    </Container>
  </>
);

EpisodeOverview.propTypes = {
  name: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  airDate: PropTypes.string.isRequired,
};

export default EpisodeOverview;

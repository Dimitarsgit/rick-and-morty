import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CardBody, CardText, Card, CardTitle } from "reactstrap";

const EpisodeCard = ({ episode }) => {
  return (
    <Card styles={{ height: "40px" }}>
      <CardBody>
        <CardTitle tag="h5">{episode.name}</CardTitle>
        <CardText>
          Episode:
          <Link to={`/episode/${episode.id}`}>{episode.episode}</Link>
        </CardText>
        <CardText>
          Air date:
          {episode.air_date}
        </CardText>
        <CardText>
          Created:
          {episode.created}
        </CardText>
      </CardBody>
    </Card>
  );
};

EpisodeCard.propTypes = {
  episode: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    air_date: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }).isRequired,
};

export default EpisodeCard;

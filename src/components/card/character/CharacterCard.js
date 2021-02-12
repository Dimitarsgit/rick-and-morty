import React from "react";
import PropTypes from "prop-types";
import { CardBody, CardText, Card, CardTitle, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <Card styles={{ height: "40px" }}>
      <CardBody>
        <CardImg top width="100%" src={character.image} alt="Card image cap" />
        <CardTitle tag="h5">{character.name}</CardTitle>
        <CardText>
          Status:
          {character.status}
        </CardText>
        <CardText>
          Species:
          {character.species}
        </CardText>
        <CardText>
          Origin:
          {character.getOrigin().getId() ? (
            <Link to={`/location/${character.getOrigin().getId()}`}>
              {character.origin.name}
            </Link>
          ) : (
            character.origin.name
          )}
        </CardText>
        <CardText>
          Location:
          {character.getLocation().getId() ? (
            <Link to={`/location/${character.getLocation().getId()}`}>
              {character.location.name}
            </Link>
          ) : (
            character.location.name
          )}
        </CardText>
        <CardText>
          Gender:
          {character.gender}
        </CardText>
      </CardBody>
    </Card>
  );
};

const CharacterLoadingCard = () => {
  return (
    <Card styles={{ height: "40px" }}>
      <CardBody>
        <CardImg top width="100%" alt="Image is loading" />
        <CardTitle tag="h5">...</CardTitle>
        <CardText>Status: ...</CardText>
        <CardText>Species: ...</CardText>
        <CardText>Origin: ...</CardText>
        <CardText>Location: ...</CardText>
        <CardText>Gender: ...</CardText>
      </CardBody>
    </Card>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    origin: PropTypes.objectOf(PropTypes.string).isRequired,
    location: PropTypes.objectOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
    episode: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    getOrigin: PropTypes.func.isRequired,
    getLocation: PropTypes.func.isRequired,
  }).isRequired,
};

CharacterCard.Loading = CharacterLoadingCard;

export default CharacterCard;

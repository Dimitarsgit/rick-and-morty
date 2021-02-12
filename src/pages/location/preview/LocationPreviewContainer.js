import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { getLocation } from "../../../service/rickAndMorty";
import Cards from "../../../components/card/Cards";
import CharacterCardContainer from "../../../components/card/character/CharacterCardContainer";
import LocationOverview from "./components/LocationOverview";
import ErrorComponent from "../../../components/error/ErrorComponent";
import SpinnerComponent from "../../../components/spinner";

const LocationPreviewContainer = ({ match }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLocation = (id) => {
    setLoading(true);
    getLocation(id)
      .then((response) => {
        setError(null);
        setLocation(response.location);
        setLoading(false);
      })
      .catch((e) => {
        setLocation(null);
        setError(e);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLocation(match.params.id);
  }, [match.params.id]);

  if (loading) return <SpinnerComponent />;

  if (error)
    return <ErrorComponent url="/location/1" message={error.message} />;

  return (
    <>
      <LocationOverview
        name={location.name}
        type={location.type}
        created={location.created}
        dimension={location.dimension}
      />
      <Cards
        propName="url"
        Component={CharacterCardContainer}
        items={location.residents}
      />
    </>
  );
};

LocationPreviewContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default withRouter(LocationPreviewContainer);

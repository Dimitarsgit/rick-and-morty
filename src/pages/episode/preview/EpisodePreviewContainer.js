import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { getEpisode } from "../../../service/rickAndMorty";
import EpisodeOverview from "./components/EpisodeOverview";
import CharacterCardContainer from "../../../components/card/character/CharacterCardContainer";
import Cards from "../../../components/card/Cards";
import ErrorComponent from "../../../components/error/ErrorComponent";
import SpinnerComponent from "../../../components/spinner";

const EpisodePreviewContainer = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [episode, setEpisode] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEpisode(match.params.id)
      .then((response) => {
        setEpisode(response.episode);
        setLoading(false);
      })
      .catch((e) => {
        setEpisode(null);
        setError(e);
        setLoading(false);
      });
  }, [match.params.id]);

  if (loading) return <SpinnerComponent />;

  if (error) return <ErrorComponent url="/episode" message={error.message} />;

  return (
    <>
      <EpisodeOverview
        name={episode.name}
        episode={episode.episode}
        created={episode.created}
        airDate={episode.air_date}
      />
      <Cards
        items={episode.characters}
        Component={CharacterCardContainer}
        propName="url"
      />
    </>
  );
};

EpisodePreviewContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
export default withRouter(EpisodePreviewContainer);

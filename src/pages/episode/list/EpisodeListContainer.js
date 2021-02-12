import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { getEpisodes } from "../../../service/rickAndMorty";
import Cards from "../../../components/card/Cards";
import EpisodeCard from "../../../components/card/episode/EpisodeCard";
import Paginator from "../../../components/paginator/Paginator";
import { filtersToSearch, searchToFilters } from "../../../utils/queryString";
import ErrorComponent from "../../../components/error/ErrorComponent";
import SpinnerComponent from "../../../components/spinner";

const EpisodeListContainer = ({ location, history }) => {
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);
  const [error, setError] = useState(null);

  const fetchEpisodes = (page) => {
    setLoading(true);
    setError(null);

    getEpisodes(page)
      .then((response) => {
        setMeta(response.meta);
        setEpisodes(response.episodes);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setEpisodes([]);
        setError(e);
      });
  };

  useEffect(() => {
    fetchEpisodes(searchToFilters(location.search));
    window.scrollTo(0, 0);
  }, [location.search]);

  const onPageChange = ({ selected }) => {
    const currentFilters = searchToFilters(location.search);

    currentFilters.page = selected + 1;

    history.push({
      pathname: "/episode",
      search: filtersToSearch(currentFilters),
    });
  };

  if (loading) {
    return <SpinnerComponent />;
  }

  if (error) return <ErrorComponent url="/episode" message={error.message} />;

  return (
    <>
      <Cards items={episodes} Component={EpisodeCard} propName="episode" />
      <Paginator
        pagesCount={meta ? meta.pages : 0}
        onChange={onPageChange}
        currentPage={searchToFilters(location.search).page - 1 || 0}
      />
    </>
  );
};

EpisodeListContainer.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default withRouter(EpisodeListContainer);

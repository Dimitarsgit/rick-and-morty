import React, { useEffect, useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import { Input, InputGroup, InputGroupAddon } from "reactstrap";
import { getCharacters } from "../../../service/rickAndMorty";
import Cards from "../../../components/card/Cards";
import CharacterCard from "../../../components/card/character/CharacterCard";
import Paginator from "../../../components/paginator/Paginator";
import { filtersToSearch, searchToFilters } from "../../../utils/queryString";
import ErrorComponent from "../../../components/error/ErrorComponent";

const CharacterListComponent = ({ location, history }) => {
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(
    searchToFilters(location.search).name || ""
  );

  const debouncedSearch = useRef(
    debounce((filters) => {
      history.push({
        pathname: "/character",
        search: filtersToSearch(filters),
      });
    }, 500)
  ).current;

  const fetchCharacters = (filters) => {
    setLoading(true);
    setError(null);
    getCharacters(filters)
      .then((response) => {
        setMeta(response.meta);
        setCharacters(response.characters);
        setLoading(false);
      })
      .catch((e) => {
        setSearch("");
        setLoading(false);
        setCharacters([]);
        setError(e);
      });
  };

  useEffect(() => {
    fetchCharacters(searchToFilters(location.search));
    window.scrollTo(0, 0);
  }, [location]);

  const onPageChange = ({ selected }) => {
    const currentFilters = searchToFilters(location.search);

    currentFilters.page = selected + 1;

    history.push({
      pathname: "/character",
      search: filtersToSearch(currentFilters),
    });
  };

  const handleSearch = ({ target: { value } }) => {
    const newFilters = searchToFilters(location.search);

    delete newFilters.page;
    if (!value.length) {
      delete newFilters.name;
    }
    if (value.length) newFilters.name = value;

    setSearch(value);

    debouncedSearch(newFilters);
  };

  return (
    <>
      <div style={{ maxWidth: "50%" }}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">Search:</InputGroupAddon>
          <Input bsSize="lg" onChange={handleSearch} value={search} />
        </InputGroup>
      </div>

      {error && <ErrorComponent message={error.message} url="/character" />}

      {!error && (
        <>
          <Cards
            loading={loading}
            items={characters}
            Component={CharacterCard}
            propName="character"
          />
          <Paginator
            currentPage={searchToFilters(location.search).page - 1 || 0}
            pagesCount={meta ? meta.pages : 1}
            onChange={onPageChange}
          />
        </>
      )}
    </>
  );
};

CharacterListComponent.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default withRouter(CharacterListComponent);

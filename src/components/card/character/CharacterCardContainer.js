import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import { getCharacter } from "../../../service/rickAndMorty";

const CharacterCardContainer = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  const fetchCharacter = (id) => {
    setLoading(true);
    getCharacter(id).then((response) => {
      setCharacter(response.character);
      setLoading(false);
    });
  };

  useEffect(() => {
    const urlParts = url.split("/");
    const id = urlParts[urlParts.length - 1];
    fetchCharacter(id);
  }, [url]);

  if (loading) return <CharacterCard.Loading />;

  return <CharacterCard character={character} />;
};

CharacterCardContainer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default CharacterCardContainer;

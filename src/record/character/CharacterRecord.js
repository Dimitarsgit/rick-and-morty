const CharacterRecord = (character) => {
  return {
    ...character,
    getId: () => character.id,
    getName: () => character.name,
    getStatus: () => character.status,
    getSpecies: () => character.species,
    getType: () => character.type,
    getGender: () => character.gender,
    getOrigin: () => {
      return {
        ...character.origin,
        getName: () => character.origin.name,
        getUrl: () => character.origin.url,
        getId: () => {
          const urlParts = character.origin.url.split("/");
          return urlParts[urlParts.length - 1];
        },
      };
    },
    getLocation: () => {
      return {
        ...character.location,
        getName: () => character.location.name,
        getUrl: () => character.location.url,
        getId: () => {
          const urlParts = character.location.url.split("/");
          return urlParts[urlParts.length - 1];
        },
      };
    },
    getImage: () => character.image,
    getEpisode: () => character.episode,
    getUrl: () => character.url,
    getDateCreated: () => character.created,
  };
};

export const mapToCharacterRecords = (characters) => {
  return characters.map((character) => {
    return CharacterRecord(character);
  });
};

export default CharacterRecord;

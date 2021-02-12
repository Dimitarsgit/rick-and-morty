import AxiosAgent from "../../utils/axiosAgent";
import { EPISODE, CHARACTER, LOCATION } from "./constants";
import CharacterRecord, {
  mapToCharacterRecords,
} from "../../record/character/CharacterRecord";

const urlFilterParser = (url, filters) => {
  let newUrl = `${url}?`;

  Object.keys(filters).forEach((filter, index) => {
    if (index) newUrl += "&";
    newUrl += `${filter}=${filters[filter]}`;
  });

  return newUrl;
};

export const getEpisodes = async (filters = {}) => {
  try {
    let url = `${EPISODE}`;

    if (Object.keys(filters).length) {
      url = urlFilterParser(url, filters);
    }

    const response = await AxiosAgent.get({
      url,
    });

    return {
      episodes: response.data.results,
      meta: response.data.info,
    };
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};

export const getEpisode = async (id) => {
  try {
    const url = `${EPISODE}/${id}`;

    const response = await AxiosAgent.get({
      url,
    });

    return {
      episode: response.data,
    };
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};

export const getCharacter = async (id) => {
  try {
    const url = `${CHARACTER}/${id}`;

    const response = await AxiosAgent.get({
      url,
    });

    return {
      character: CharacterRecord(response.data),
    };
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};

export const getCharacters = async (filters = {}) => {
  try {
    let url = `${CHARACTER}`;

    if (Object.keys(filters).length) {
      if (Object.keys(filters).length) {
        url = urlFilterParser(url, filters);
      }
    }

    const response = await AxiosAgent.get({
      url,
    });

    return {
      characters: mapToCharacterRecords(response.data.results),
      meta: response.data.info,
    };
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};

export const getLocation = async (id) => {
  try {
    const url = `${LOCATION}/${id}`;

    const response = await AxiosAgent.get({
      url,
    });

    return {
      location: response.data,
    };
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};

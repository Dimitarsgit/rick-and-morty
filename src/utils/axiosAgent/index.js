import axios from "axios";
import removeUndefined from "../removeUndefined";
import { BASE_URL } from "./constants";

export default {
  get: ({ url, headers }) => {
    const request = removeUndefined({
      url: `${BASE_URL}/${url}`,
      method: "GET",
      headers,
    });

    return axios(request);
  },
  delete: ({ url, headers }) => {
    const request = removeUndefined({
      url: `${BASE_URL}/${url}`,
      method: "DELETE",
      headers,
    });

    return axios(request);
  },
  post: ({ url, headers, data }) => {
    const request = removeUndefined({
      url: `${BASE_URL}/${url}`,
      method: "POST",
      headers,
      data,
    });

    return axios(request);
  },
  put: ({ url, headers, data }) => {
    const request = removeUndefined({
      url: `${BASE_URL}/${url}`,
      method: "PUT",
      headers,
      data,
    });

    return axios(request);
  },
};

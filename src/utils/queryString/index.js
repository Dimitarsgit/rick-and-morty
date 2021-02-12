import queryString from "query-string";

const removeEmptyFilters = (filters) => {
  return { ...filters };
};

export const searchToFilters = (search) => {
  const parsedUrl = queryString.parseUrl(search);

  return { ...parsedUrl.query };
};

export const filtersToSearch = (filters) => {
  const parsedFilters = removeEmptyFilters(filters);

  return queryString.stringify(parsedFilters);
};

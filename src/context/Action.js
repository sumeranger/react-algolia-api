export const SearchStart = () => ({
  type: "SEARCH_START",
});

export const SearchSuccess = (word, result) => ({
  type: "SEARCH_SUCCESS",
  keyword: word,
  payload: result,
});

export const SearchFailure = () => ({
  type: "SEARCH_FAILURE",
});

export const LoadMore = () => ({
  type: "LOAD_MORE",
});

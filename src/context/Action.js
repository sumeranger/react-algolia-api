export const SearchStart = () => ({
  type: "SEARCH_START",
});

export const SearchSuccess = (word, max, result) => ({
  type: "SEARCH_SUCCESS",
  query: word,
  maxpages: max,
  payload: result,
});

export const SearchFailure = () => ({
  type: "SEARCH_FAILURE",
});

export const LoadMoreStart = () => ({
  type: "LOAD_MORE_START",
});

export const LoadMoreSuccess = (max, result) => ({
  type: "LOAD_MORE_SUCCESS",
  maxpages: max,
  payload: result,
});

export const LoadMoreFailure = () => ({
  type: "LOAD_MORE_FAILURE",
});

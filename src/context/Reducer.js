const Reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_START":
      return {
        keyword: state.keyword,
        page: state.page,
        result: null,
        isFetching: true,
        error: false,
      };
    case "SEARCH_SUCCESS":
      return {
        keyword: action.keyword,
        page: 0,
        result: action.payload,
        isFetching: false,
        error: false,
      };
    case "SEARCH_FAILURE":
      return {
        keyword: state.keyword,
        page: state.page,
        result: null,
        isFetching: false,
        error: true,
      };
    case "LOAD_MORE":
      return {
        keyword: state.keyword,
        page: state.page + 1,
        result: state.payload,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;

const Reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_START":
      return {
        keyword: state.keyword,
        page: state.page,
        npages: state.npages,
        result: null,
        isFetching: true,
        error: false,
      };
    case "SEARCH_SUCCESS":
      return {
        keyword: action.query,
        page: 0,
        npages: action.maxpages,
        result: action.payload,
        isFetching: false,
        error: false,
      };
    case "SEARCH_FAILURE":
      return {
        keyword: state.keyword,
        page: state.page,
        npages: state.npages,
        result: null,
        isFetching: false,
        error: true,
      };
    case "LOAD_MORE_START":
      return {
        keyword: state.keyword,
        page: state.page,
        npages: state.npages,
        result: state.result,
        isFetching: true,
        error: false,
      };
    case "LOAD_MORE_SUCCESS":
      return {
        keyword: state.keyword,
        page: state.page + 1,
        npages: action.maxpages,
        result: [...state.result, ...action.payload],
        isFetching: false,
        error: false,
      };
    case "LOAD_MORE_FAILURE":
      return {
        keyword: state.keyword,
        page: state.page,
        npages: state.npages,
        result: state.result,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default Reducer;
//[...state.result, action.payload]

const MovieReducer = (state, action) => {
  switch (action.type) {
    //GET
    case "GET_MOVIES_START":
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    case "GET_MOVIES_SUCCESS":
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_MOVIES_FAILURE":
      return {
        movies: [],
        isFetching: false,
        error: true,
      };
    //GET MOVIE

    case "GET_MOVIE_START":
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    case "GET_MOVIE_SUCCESS":
      return {
        movie: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_MOVIE_FAILURE":
      return {
        movie: [],
        isFetching: false,
        error: true,
      };

    //CREATE
    case "CREATE_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_MOVIE_SUCCESS":
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    //UPLOAD
    case "UPLOAD_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_MOVIE_SUCCESS":
      return {
        movies: state.movies.map(
          (movie) => movie._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    //UPDATE 20221008
    case "UPDATE_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_MOVIE_SUCCESS":
      return {
        movies: state.movies.map(
          (movie) => movie._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    //DELETE
    case "DELETE_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_MOVIE_SUCCESS":
      return {
        movies: state.movies.filter((movie) => movie._id != action.payload), //해당하는 파일들을 남기는것
        isFetching: false,
        error: false,
      };
    case "DELETE_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default MovieReducer;

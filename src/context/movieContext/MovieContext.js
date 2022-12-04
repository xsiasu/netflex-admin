import MovieReducer from "./MovieReducer";
import { createContext, useReducer } from "react";

const INITAL_STATE = {
  movies: [],
  movie: [],
  isFetching: false,
  error: false,
};

export const MovieContext = createContext(INITAL_STATE);

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, INITAL_STATE);

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

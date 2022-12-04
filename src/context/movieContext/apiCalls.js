import axios from "axios";
import {
  getMoviesSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMovieSuccess,
  getMovieFailure,
  getMovieStart,
  createMovieSuccess,
  createMovieFailure,
  createMovieStart,
  deleteMovieStart,
  deleteMovieSuccess,
  deleteMovieFailure,
  updateMovieStart,
  updateMovieSuccess,
  updateMovieFailure,
} from "./MovieAction";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());

  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

// //GET MOVIE
// export const getMovie = async (dispatch) => {
//   dispatch(getMovieStart());

//   try {
//     const res = await axios.get("/find/:movieId", {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     console.log(res.data);
//     dispatch(getMovieSuccess(res.data));
//   } catch (error) {
//     dispatch(getMovieFailure());
//   }
// };

//CREATE
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/movies", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

//UPDATE
// export const updateMovie = async (id, dispatch) => {
//   dispatch(updateMovieStart());
//   try {
//     const res = await axios.post("/movies/" + id, movie, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(updateMovieSuccess(res.data));
//   } catch (err) {
//     dispatch(updateMovieFailure());
//   }
// };

//DELETE
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};

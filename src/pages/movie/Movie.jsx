import { useContext, useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import "./movie.css";
import { Publish } from "@material-ui/icons";

const Movie = () => {
  const location = useLocation();
  const movie = location.movie;
  // const [title, setTitle] = useState(null);
  // const [year, setYear] = useState(null);
  // const [genre, setGenre] = useState(null);
  // const [limit, setLimit] = useState(null);
  // const [trailer, setTrailer] = useState(null);
  // const [video, setVideo] = useState(0);
  const { movieId } = useParams();
  // const [movie, setMovie] = useState("");
  const { dispatch } = useContext(MovieContext);

  // useEffect(() => {
  //   getMovie(dispatch);
  // }, [dispatch]);

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setMovie({ ...movie, [e.target.name]: value });
  // };
  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setMovie({ ...movie, [e.target.name]: value });
  // };
  // const handleUpdate = (e) => {
  //   e.preventDefault();
  // };

  console.log(movie);
  return (
    <div className="product" style={{ paddingLeft: "100px" }}>
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      {/* <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div> */}
      <div>현재아이디는 {movieId}입니다.</div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" defaultValue={movie.title} onC />
            <label>Year</label>
            <input type="text" defaultValue={movie.year} />
            <label>Genre</label>
            <input type="text" defaultValue={movie.genre} />
            <label>Limit</label>
            <input type="text" defaultValue={movie.limit} />
            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer} />
            <label>Video</label>
            <input type="file" placeholder={movie.video} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Movie;

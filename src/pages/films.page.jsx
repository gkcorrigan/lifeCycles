import { useEffect, useState } from "react";
import {
  filterFilmsByDirector,
  getFilmStats,
  getListOf,
} from "../helpers/film.helpers";
import { Link } from "react-router-dom";
function FilmsPage() {
  const [movies, setMovies] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");
  useEffect(() => {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setMovies(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //Dereived State
  const moviesByDirector = filterFilmsByDirector(movies, searchDirector);
  const allDirectors = getListOf(movies, "director");
  const { avg_score, total, latest } = getFilmStats(movies);

  return (
    <>
      <h1>Studio Ghibli Films</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="directorSelection">Pick a Director</label>
          <select
            name="directorSelection"
            id="directorSelection"
            value={searchDirector}
            onChange={(event) => {
              setSearchDirector(event.target.value);
            }}
          >
            <option value="">All</option>
            {allDirectors.map((director, index) => {
              return (
                <option key={index} value={director}>
                  {director}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      
      <div>
        <div>
          <span># Of Films</span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating</span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film</span>
          <span>{latest}</span>
        </div>
      </div>

      <ul>
        {moviesByDirector.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`film/${movie.id}`}>
                <h2 className="italics">{movie.title}</h2>
              </Link>
              <img src={movie.image} alt={movie.title} />
              <p> {movie.description} </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FilmsPage;

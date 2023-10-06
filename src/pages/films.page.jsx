import { useEffect, useState } from "react";
import {filterFilmsByDirector, getListOf } from "../helpers/film.helpers";
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
  const moviesByDirector = filterFilmsByDirector(movies,searchDirector);

  const allDirectors = getListOf(movies, "director");
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
         {allDirectors.map((director,index) => {
            return <option key={index} value={director}>{director}</option>
         })}
          </select>
        </div>
      </form>

      <ul>
        {moviesByDirector.map((movie) => {
          return (
            <li key={movie.id}>
              {movie.title}
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

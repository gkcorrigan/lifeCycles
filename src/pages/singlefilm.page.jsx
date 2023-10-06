import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const SingleFilmPage = () => {
  const [item, setItem] = useState({});

  //returns an object that has information about the query parameters of the current page in OUR website
  const { id } = useParams();

  const getFilm = () => {
    const url = `https://studioghibliapi-d6fc8.web.app/films/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setItem(result);
      })

      .catch((err) => {console.error(err)});
  };
  useEffect(() => {
    getFilm();
  }, []);

  return (
    <div>
      <div>
        <img src={`${item.image}`} alt={`${item.title} Poster`} />
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>
          Directed by {item.director}. Produced by {item.producer}.
        </p>
        <p>
          The film was released in <strong>{item.release_date}</strong> and
          garnered a <strong>{item.rt_score}</strong> aggregate score on{" "}
          <a
            href="https://www.rottentomatoes.com/"
            target="_blank"
            rel="noreferrer"
          >
            Rotten Tomatoes
          </a>
          .
        </p>
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default SingleFilmPage;

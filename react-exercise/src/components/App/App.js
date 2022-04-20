import { useEffect, useState } from 'react';
// import DynamicElement from "../DynamicElement/DynamicElement";
// import { pageElements } from "../../data/data";
import MovieCatlog from "../MovieCatlog/MovieCatlog";
import SearchBar from '../SearchBar/SearchBar';

function App() {

  const [movies, setMovies] = useState([
    {
      title: "",
      description: "",
      imageUrl: ""
    }
  ]);

  const apiKey = '7b8c8f8b9689aede3b63d1d563236916';
  const apiLink = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

  useEffect(() => {
    fetchMovieData();
  });

  const fetchMovieData = async () => {
    try {
      const res = await fetch(apiLink, { method: 'get' });
      const data = await res.json();
      const movieList = data.results.map((movie) => ({
        title: movie.title,
        description: movie.overview,
        imageUrl: 'https://image.tmdb.org/t/p/w200' + movie.poster_path
      }));
      setMovies(movieList);
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      {/* <DynamicElement props={pageElements} /> */}
      <SearchBar props={movies} />
      <MovieCatlog props={movies} />
    </>
  );
}

export default App;
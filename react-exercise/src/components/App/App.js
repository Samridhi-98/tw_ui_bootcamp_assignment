import { useEffect, useContext } from 'react';
// import DynamicElement from "../DynamicElement/DynamicElement";
// import { pageElements } from "../../data/data";
import SearchBar from '../SearchBar/SearchBar';
import MovieCatlog from "../MovieCatlog/MovieCatlog";
import { MovieContext } from '../../context/MovieContext';
import './App.css';

function App() {

  const { setMovie, setBanner } = useContext(MovieContext);
  // console.log("inside app movie set: ", setMovie);

  const apiKey = '7b8c8f8b9689aede3b63d1d563236916';
  const apiLink = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const res = await fetch(apiLink, { method: 'get' });
        const data = await res.json();
        const movieList = data.results.map((movie) => ({
          title: movie.title,
          description: movie.overview,
          releaseDate: movie.release_date,
          backDropUrl: "https://image.tmdb.org/t/p/original" + movie.backdrop_path,
          imageUrl: "https://image.tmdb.org/t/p/w200" + movie.poster_path,
          rating: movie.vote_average,
        }));
        setMovie(movieList);
        setBanner(movieList[0]);
      } catch (err) {
        console.log(err)
      }
    }
    fetchMovieData();
  }, []);

  return (
    <>
      {/* <DynamicElement props={pageElements} /> */}
      <SearchBar />
      <MovieCatlog />
    </>
  );
}

export default App;
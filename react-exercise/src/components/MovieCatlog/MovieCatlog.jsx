import { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import MovieBanner from '../MovieBanner/MovieBanner';
import Pagination from '../Pagination/Pagination';
import './MovieCatlog.css';

function MovieCatlog() {

    const { state, setBanner } = useContext(MovieContext);

    const createMovieCards = () => {
        let movieList = state.searchResults.length > 0 ? state.searchResults : state.movies;

        // console.log("before movieList: ", movieList);

        movieList = movieList.slice(state.pageNumber * state.pageSize - state.pageSize, state.pageNumber * state.pageSize);

        // console.log("after movieList: ", movieList);

        return movieList.map((movie, index) => (
            <article className='movie-box' key={index}>
                <figure onClick={() => setBanner(movie)} key={index}>
                    <img className='movie-image' src={movie.imageUrl} alt={movie.title} />
                    <figcaption className='movie-title'>{movie.title}</figcaption>
                </figure>
            </article>
        ))
    }

    return (
        <section className='movies'>
            <section>
                <MovieBanner />
            </section>
            <section className='movie-card'>
                {createMovieCards()}
            </section>
            <section>
                <Pagination />
            </section>
        </section>
    )
}

export default MovieCatlog;
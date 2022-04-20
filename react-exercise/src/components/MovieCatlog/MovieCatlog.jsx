import { useState } from 'react';
import MovieBanner from '../MovieBanner/MovieBanner';
import './MovieCatlog.css';

function MovieCatlog({ props }) {

    const [movieBanner, setMovieBanner] = useState({
        title: "Spider-Man: No Way Home",
        description: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        imageUrl: "https://image.tmdb.org/t/p/w200/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
    });

    const createMovieCards = (movieList) => {
        return movieList.map((movie, index) => (
            <article key={index}>
                <figure onClick={handleMovieBanner} key={index}>
                    <img className='movie-image' src={movie.imageUrl} alt={movie.title} />
                    <figcaption className='movie-title'>{movie.title}</figcaption>
                    <p className='movie-description'>{movie.description}</p>
                </figure>
            </article>
        ))
    }

    const handleMovieBanner = (event) => {
        // console.log("image: ", event?.target?.parentNode?.childNodes);
        const movieData = {
            title: event?.target?.parentNode?.childNodes[1]?.innerText,
            description: event?.target?.parentNode?.childNodes[2].innerText,
            imageUrl: event?.target?.parentNode?.childNodes[0]?.currentSrc
        }
        setMovieBanner(movieData);
        // console.log(movieData);
    }

    return (
        <section className='movies'>
            <h1>Movie Catalog</h1>
            <section>
                <MovieBanner props={movieBanner} />
            </section>
            <section className='movie-card'>
                {createMovieCards(props)}
            </section>
        </section>
    )
}

export default MovieCatlog;
import { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import './MovieBanner.css'

function MovieBanner() {
    const { state } = useContext(MovieContext);

    const getRating = () => {
        let rating = state.banner.rating / 2;
        let ratingStars = '';
        for (let idx = 0; idx < rating; idx++) {
            ratingStars += '⭐';
        }
        return ratingStars;
    }

    return (
        <article>
            <figure className='banner'>
                <img className='banner-image' src={state.banner.backDropUrl} alt={state.banner.title} />
                <section className='banner-content'>
                    <figcaption className='banner-title'>{state.banner.title}</figcaption>
                    <p className='banner-description'>{state.banner.description}</p>
                    <p className='banner-rating'> {getRating()} </p>
                </section>
            </figure>
        </article>
    )
}

export default MovieBanner;
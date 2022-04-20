import './MovieBanner.css'

function MovieBanner({ props }) {
    return (
        <article>
            <figure className='banner'>
                <img className='banner-image' src={props.imageUrl} alt={props.title} />
                <aside className='aside-content'>
                    <figcaption className='banner-title'>{props.title}</figcaption>
                    <p className='banner-description'>{props.description}</p>
                </aside>
            </figure>
        </article>
    )
}

export default MovieBanner;
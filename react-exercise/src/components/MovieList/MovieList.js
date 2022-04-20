function MovieList() {

    const apiKey = '7b8c8f8b9689aede3b63d1d563236916';
    const apiLink = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

    const fetchMovieData = () => {
        try {
            fetch(apiLink, { method: 'get' })
                .then((res) => res.json())
                .then((data) => {
                    const movieList = data.results.map((movie) => ({
                        title: movie.title,
                        description: movie.overview,
                        imageUrl: 'https://image.tmdb.org/t/p/w200' + movie.poster_path
                    }))
                    console.log(movieList);
                    createMovieCards(movieList);
                })
        } catch (err) {
            console.log(err)
        }
    }

    const createMovieCards = (movieList) => {
        console.log(movieList);
        return movieList.map((movie) => (
            <div>
                <img src={movie.imageUrl} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
            </div>
        ))
    }

    return (
        <div>
            <h1>Movie List</h1>
            <button onClick={fetchMovieData}>Fetch Movie Data</button>
            {/* {createMovieCards(movieList)} */}
        </div>
    )
}

export default MovieList;
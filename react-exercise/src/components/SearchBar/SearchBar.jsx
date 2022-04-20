import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ props }) {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        const movie = props.filter(movie => movie.title.toLowerCase().includes(event.target.value.toLowerCase()));
        // console.log(movie);
        setSearchResults(movie);
    }

    const handleMovieList = () => {
        if (searchTerm !== '') {
            return searchResults.map((movie, index) => (
                <article key={index}>
                    <figure>
                        <img className='search-image' src={movie.imageUrl} alt={movie.title} />
                        <figcaption className='title'>{movie.title}</figcaption>
                    </figure>
                </article>
            ))
        }
        return;
    }
    const sortAscending = () => {
        searchResults.sort((a, b) => a.title.localeCompare(b.title));
    }

    const sortDescending = () => {
        searchResults.sort((a, b) => b.title.localeCompare(a.title));
    }

    return (
        <>
            <section className='search-bar'>
                <input className='search-input' type='text' placeholder='Search for a movie' onChange={handleChange} value={searchTerm} />
                <button className='sort-asce' onClick={sortAscending}>Sort Ascending</button>
                <button className='sort-dsce' onClick={sortDescending}>Sort Descending</button>
            </section>
            <section className='search-list'>
                {handleMovieList()}
            </section>
        </>
    )
}

export default SearchBar;
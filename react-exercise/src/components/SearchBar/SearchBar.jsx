import { useState, useContext } from 'react';
import ModalForm from '../ModalForm/ModalForm';
import { MovieContext } from '../../context/MovieContext';
import './SearchBar.css';

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');
    const [modal, setModal] = useState(false);

    const { state, setSearchResults, clearSearchResults, sortMovieList, setPageSize } = useContext(MovieContext);
    ;

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        const movie = state.movies.filter(movie => movie.title.toLowerCase().includes(event.target.value.toLowerCase()));
        setSearchResults(movie);
    }

    const handleModalForm = () => {
        // console.log("inside handleModalForm: ");
        setModal(!modal);
    }

    return (
        <>
            <section className='search-bar'>
                <section className='header'>
                    <h1>Bombay Talkies 🎭</h1>
                </section>
                <section className='nav-item'>
                    <input className='search-input' type='text' placeholder='Search for a movie' onChange={handleChange} value={searchTerm} />
                    <select className='sort-select' onChange={(event) => sortMovieList(event)}>
                        <option value='a-z'>A-Z</option>
                        <option value='z-a'>Z-A</option>
                    </select>
                    <select className='page-select' onChange={(event) => setPageSize(event)} defaultValue={4}>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                    </select>
                    <button className='clear-search' onClick={() => { setSearchTerm(''); clearSearchResults() }}>Clear Search</button>
                    <button className='add-movie' onClick={handleModalForm} >Add Movie</button>
                    {modal && <ModalForm setModalState={handleModalForm} />}
                </section>
            </section>
        </>
    )
}

export default SearchBar;
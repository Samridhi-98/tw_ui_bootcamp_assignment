import { useReducer, createContext } from "react";
import { reducer, initialState } from '../reducer/reducer';

export const MovieContext = createContext(initialState);

function MovieProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addMovie = (movie) => {
        dispatch({ type: 'ADD_MOVIES', payload: { newMovie: movie } });
    }

    const setMovie = (movie) => {
        dispatch({ type: 'SET_MOVIES', payload: { movies: movie } });
    }

    const setBanner = (banner) => {
        dispatch({ type: 'SET_BANNER', payload: { banner: banner } });
    }

    const setSearchResults = (searchResults) => {
        dispatch({ type: 'SET_SEARCH_RESULTS', payload: { searchResults: searchResults } });
    }

    const clearSearchResults = () => {
        dispatch({ type: 'CLEAR_SEARCH_RESULTS' });
    }

    const sortMovieList = (event) => {
        dispatch({ type: 'SORT_MOVIE_LIST', payload: { sortOrder: event.target.value } });
    }

    const setPageNumber = (pageNumber) => {
        dispatch({ type: 'SET_PAGE_NUMBER', payload: { pageNumber: pageNumber } });
    }

    const setPageSize = (event) => {
        dispatch({ type: 'SET_PAGE_SIZE', payload: { pageSize: event.target.value } });
    }

    console.log("inside context: ", state);

    return (
        <MovieContext.Provider value={{ state, addMovie, setMovie, setBanner, setSearchResults, clearSearchResults, sortMovieList, setPageNumber, setPageSize }}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider;
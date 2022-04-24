export const initialState = {
    movies: [],
    banner: {},
    searchResults: [],
    pageNumber: 1,
    pageSize: 4,
    totalPages: 0,
};

export function reducer(state, action) {

    // console.log("inside reducer state: ", state);
    // console.log("inside reducer action: ", action.payload);

    switch (action.type) {
        case 'SET_MOVIES':
            return {
                ...state,
                movies: action.payload.movies
            }
        case 'SET_BANNER':
            return {
                ...state,
                banner: action.payload.banner
            }
        case 'SET_SEARCH_RESULTS':
            return {
                ...state,
                searchResults: action.payload.searchResults
            }
        case 'CLEAR_SEARCH_RESULTS':
            return {
                ...state,
                searchResults: []
            }
        case 'SORT_MOVIE_LIST':
            if (action.payload.sortOrder === 'a-z') {
                return {
                    ...state,
                    movies: [...state.movies].sort((a, b) => a.title.localeCompare(b.title))
                }
            }
            else if (action.payload.sortOrder === 'z-a') {
                return {
                    ...state,
                    movies: [...state.movies].sort((a, b) => b.title.localeCompare(a.title))
                }
            }
            return state;
        case 'ADD_MOVIES':
            return {
                ...state,
                movies: [...state.movies, action.payload.newMovie]
            }
        case 'SET_PAGE_NUMBER':
            return {
                ...state,
                pageNumber: action.payload.pageNumber
            }
        case 'SET_PAGE_SIZE':
            return {
                ...state,
                pageSize: action.payload.pageSize,
                totalPages: Math.ceil(state.movies.length / action.payload.pageSize)
            }
        default:
            return state;
    }
}
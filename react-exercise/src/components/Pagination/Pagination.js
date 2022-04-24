import { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import './Pagination.css';

function Pagination() {

    const { state, setPageNumber } = useContext(MovieContext);

    const getPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(state.movies.length / state.pageSize); i++) {
            let page = <button className='pagination-button' onClick={() => setPageNumber(i)} key={i}>{i}</button>
            pageNumbers.push(page);
        }
        // console.log("pageNumbers: ", pageNumbers);
        return pageNumbers;
    }

    return (
        <>
            <section className='pagination'>
                <button className='pagination-end-button' onClick={() => setPageNumber(state.pageNumber - 1)} disabled={state.pageNumber === 1}>{`<<`}</button>
                {getPageNumbers()}
                <button className='pagination-end-button' onClick={() => setPageNumber(state.pageNumber + 1)} disabled={state.pageNumber === state.pageSize}>{`>>`}</button>
            </section>
        </>
    )
}

export default Pagination;
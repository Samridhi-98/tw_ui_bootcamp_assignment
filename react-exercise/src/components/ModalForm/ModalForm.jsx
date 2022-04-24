import { useContext, useState } from 'react';
import { MovieContext } from '../../context/MovieContext';
import './ModalForm.css';

function ModalForm(props) {

    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        releaseDate: '',
        backDropUrl: '',
        imageUrl: '',
        rating: '',
    });
    const { addMovie } = useContext(MovieContext);


    const handleChange = (event) => {
        // console.log("inside handleChange: ", event.target.value);
        setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        addMovie(newMovie);
        props.setModalState();
    }

    return (
        <>
            <section className='modal-form'>
                <form className='modal-form-content' onSubmit={onFormSubmit} onChange={handleChange}>
                    <h1>Add Movie</h1>
                    <span>
                        <label htmlFor='title'></label>
                        <input className='form-input' type='text' name='title' placeholder='Movie Title' required />
                    </span>
                    <span>
                        <label htmlFor='releaseDate'></label>
                        <input className='form-input' type='date' name='releaseDate' placeholder='Release date' required />
                    </span>
                    <span>
                        <label htmlFor='imageUrl'></label>
                        <input className='form-input' type='text' name='imageUrl' placeholder='Image URL' required />
                    </span>
                    <span>
                        <label htmlFor='backDropUrl'></label>
                        <input className='form-input' type='text' name='backDropUrl' placeholder='BackDrop URL' required />
                    </span>
                    <span>
                        <label htmlFor='rating'></label>
                        <input className='form-input' type='number' name='rating' placeholder='Rating' required />
                    </span>
                    <span>
                        <label htmlFor='description'></label>
                        <textarea className='form-desc' name='description' placeholder='Description' rows='6' required />
                    </span>
                    <section className='form-button'>
                        <button type='submit'>Submit</button>
                        <button type='button' onClick={props.setModalState}>Close</button>
                    </section>
                </form>
            </section>
        </>
    )
}

export default ModalForm;
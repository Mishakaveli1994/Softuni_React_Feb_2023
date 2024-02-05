import { useEffect } from 'react';
import styles from './Movie.module.css';

export default function Movie({ id, title, year, plot, posterUrl, director, onMovieDelete, onMovieSelect, selected }) {
    // Combined mount and unmount
    useEffect(() => {
        console.log(`Movie ${title} mounted`);

        return () => console.log(`Movie ${title} unmounted`);
    }, [title]); // Will run only once when the component is first mounted

    useEffect(() => {
        console.log(`Movie ${title} updated`);
    }, [selected, title]); // Will run only once when the selected value is updated for the current movie+

    // useEffect(() => {
    //     return () => console.log(`Movie ${title} unmounted`);
    // }, [selected, title]); // Will run only once when the component is unmounted

    return (
        <article className={styles['movie-article']}>
            <h3>
                {title}, {year}
                {selected && <span> SELECTED</span>}
            </h3>
            <main>
                <img src={posterUrl} alt={title} />
                <p>Description: {plot}</p>
            </main>
            <footer>Director: {director}</footer>
            <button onClick={() => onMovieDelete(id)}>Delete Movie</button>
            <button onClick={() => onMovieSelect(id)}>Highlight Movie</button>
        </article>
    );
}

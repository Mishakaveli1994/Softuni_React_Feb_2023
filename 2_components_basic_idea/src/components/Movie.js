const Movie = (props) => {
    return (
        <article>
            <h2>{props.title}</h2>
            <span>Year of filming: </span>
            {props.year}
            <br />
            <span>Cast: </span>
            <ul style={{"list-style": "none"}}>
                <li>{props.cast[0]}</li>
                <li>{props.cast[1]}</li>
            </ul>
            <br />
            <br />
            <br />
        </article>
    );
};

export default Movie;

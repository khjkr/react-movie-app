import PropTypes from 'prop-types';
import './Movie.css';

function Movie(props) {
  return (
    <div className="Movie">
      <MoviePoster poster={props.poster} />
      <h1>{props.title}</h1>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

function MoviePoster(props) {
  return (
    <img src={props.poster} alt="poster" />
  )
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie;

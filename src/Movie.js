import './Movie.css';

function Movie(props) {
  return (
    <div className="Movie">
      <MoviePoster poster={props.poster} />
      <h1>{props.title}</h1>
    </div>
  );
}

function MoviePoster(props) {
  return (
    <img src={props.poster} alt="poster" />
  )
}

export default Movie;

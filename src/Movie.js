import './Movie.css';

function Movie() {
  return (
    <div className="Movie">
      <MoviePoster />
      <h1>Your name</h1>
    </div>
  );
}

function MoviePoster() {
  return (
    <img src="https://upload.wikimedia.org/wikipedia/ko/d/d1/%EB%84%88%EC%9D%98_%EC%9D%B4%EB%A6%84%EC%9D%80.jpg" />
  )
}

export default Movie;

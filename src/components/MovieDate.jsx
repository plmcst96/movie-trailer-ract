import "./movieData.css"

const MovieData = ({ movie }) => {
  return (
    <div className={`date ${movie.active ? "active" : undefined}`}>
      <h2>On {movie.date}</h2>
    </div>
  )
}

export default MovieData

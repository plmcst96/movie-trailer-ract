import { useEffect, useState } from "react"
import "./banner.css"
// import bgImg from "../images/bg-transformer.jpg"
import MovieContent from "../components/MovieContent"
import MovieData from "../components/MovieDate"
import PlayBtn from "../components/PlayBtn"
import MovieSwiper from "../components/MovieSwiper"

const Banner = () => {
  const [movies, setMovies] = useState([])

  const getData = () => {
    fetch("http://localhost:3000/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err.message))
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSlideChange = (id) => {
    const newMovies = movies.map((movie) => {
      movie.active = false
      if (movie._id === id) {
        movie.active = true
      }
      return movie
    })
    setMovies(newMovies)
  }

  return (
    <div className="banner">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div className="movie" key={movie._id}>
            <img
              src={movie.bgImg}
              alt="background imag"
              className={`bgImg ${movie.active ? "active" : undefined}`}
            />
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-12 col-md-6"
                  style={{ marginTop: "-5.2em" }}
                >
                  <MovieContent movie={movie} />
                </div>
                <div
                  className="col-lg-6 col-md-12"
                  style={{ marginTop: "-5.2em" }}
                >
                  <MovieData movie={movie} />
                  <PlayBtn movie={movie} />
                </div>
              </div>
            </div>
          </div>
        ))}

      {movies && movies.length > 0 && (
        <MovieSwiper slides={movies} slideChange={handleSlideChange} />
      )}
    </div>
  )
}

export default Banner

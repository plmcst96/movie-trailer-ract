import { useState } from "react"
import Modal from "../components/Modal"
import "./playBtn.css"

const PlayBtn = ({ movie }) => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <div
        className={`trailer d-flex align-items-center justify-content-center ${
          movie.active ? "active" : undefined
        }`}
      >
        <a href="/" className="playBtn" onClick={toggleModal}>
          <ion-icon name="play-outline"></ion-icon>
        </a>
        <p>Watch Trailer</p>
      </div>
      {movie.active && (
        <Modal movie={movie} toggleModal={toggleModal} status={modal} />
      )}
    </>
  )
}

export default PlayBtn

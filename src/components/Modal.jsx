import "./modal.css"

const Modal = ({ movie, toggleModal, status }) => {
  return (
    <div className={`movieModal ${status ? "active" : undefined}`}>
      <a href={movie.video} className="modalClose" onClick={toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
      </a>
      <iframe
        width="560"
        height="315"
        src={movie.video}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Modal

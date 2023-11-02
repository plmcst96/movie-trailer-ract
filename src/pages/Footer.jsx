import FooterNavItem from "../components/FooterNavItem"
import "./footer.css"

const Footer = () => {
  const usefulLinks = [
    "Home",
    "Movies",
    "My List",
    "Terms of service",
    "Privacy Policy",
  ]

  const location = [
    "Pinco Panco",
    "Adams",
    "Ti piacio",
    "Juntos me jama",
    "Eccolaaa",
  ]

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>CINEMA</span>
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                quisquam vel minus sed illo, natus libero totam ex iure, fugit
                impedit, adipisci enim commodi odio autem. Nisi, id. Nemo, quas?
              </p>
              <div className="social-links mt-3">
                <a href="/" className="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="/" className="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="/" className="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="/" className="youtube">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {usefulLinks.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Cinemas</h4>
              <ul>
                {location.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Street Name <br />
                City Name, State 123456 <br />
                Australia <br />
                <strong>Phone:</strong> +1 2345 6789 00 <br />
                <strong>Email:</strong> info@example.com <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>DSudio Technology</span>
          </strong>
          All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="/">Dstudio Technology</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

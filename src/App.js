
import './App.css';
import Banner from './pages/Banner';
import Header from './pages/Header';

import 'bootstrap/dist/css/bootstrap.min.css'
import "swiper/css"
import Main from './pages/Main';
import Footer from './pages/Footer';
import BackToTopBtn from './components/BackToTopBtn';
import { useEffect, useState } from 'react';

function App() {

  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY)
    })
  })

  return (
    <>
      <Header scroll={scroll} />
      <Banner />
      <Main />
      <Footer />
      <BackToTopBtn scroll={scroll} />
    </>
  );
}

export default App;

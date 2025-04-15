import "./App.css";
import ImageBox from "./components/ImageBox";
import { useState } from "react";
function App() {
  const images = [
    {
      id: 1,
      image: "../src/assets/desktop/image-deep-earth.jpg",
      title: "DEEP EARTH",
    },

    {
      id: 2,
      image: "../src/assets/desktop/image-night-arcade.jpg",
      title: "NIGHT ARCADE",
    },
    {
      id: 3,
      image: "../src/assets/desktop/image-soccer-team.jpg",
      title: "SOCCER TEAM VR",
    },
    {
      id: 4,
      image: "../src/assets/desktop/image-grid.jpg",
      title: "THE GRID",
    },
    {
      id: 5,
      image: "../src/assets/desktop/image-from-above.jpg",
      title: "FROM ABOVE",
    },
    {
      id: 6,
      image: "../src/assets/desktop/image-pocket-borealis.jpg",
      title: "POCKET BOREALIS",
    },
    {
      id: 7,
      image: "../src/assets/desktop/image-curiosity.jpg",
      title: "THE CURIOSITY",
    },
    {
      id: 8,
      image: "../src/assets/desktop/image-fisheye.jpg",
      title: "MAKE IT FISHEYE",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="main-container">
      <div className="hero-bg"></div>
      <div className="wrapper">
        <div className="navbar">
          <div className="navigation">
            <div className="logo-container">
              <img src="./src/assets/logo.svg" alt="logo" />
            </div>
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "Close" : "Menu"}
              <img src="./src/assets/icon-hamburger.svg" />
            </button>
            <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              <a>About</a>
              <a>Careers</a>
              <a>Events</a>
              <a>Products</a>
              <a>Support</a>
            </div>
          </div>
          <div className="title">
            <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
          </div>
        </div>
        <section className=" section section-one">
          <div className="section-one-photo">
            <img src="./src/assets/desktop/image-interactive.jpg" />
          </div>
          <div className="section-one-right">
            <h2>THE LEADER IN INTERACTIVE VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>
        <section className="section section-two">
          <div className="section-title">
            <h2>OUR CREATIONS</h2>
            <button>SEE ALL</button>
          </div>
          <div className="section-images">
            {images.map((image) => (
              <ImageBox
                key={image.id}
                image={image.image}
                title={image.title}
              />
            ))}
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="footer-content wrapper">
          <div className="footer-links">
            <div className="footer-logo">
              <img src="./src/assets/logo.svg" alt="logo" />
            </div>
            <div className="icons">
              <a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-pinterest-p"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="second-footer">
            <div className="footer-links-left">
              <a>About</a>
              <a>Career</a>
              <a>Events</a>
              <a>Products</a>
              <a>Supports</a>
            </div>
            <div className="footer-text">
              <p>@ 2011 Loopstudios. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

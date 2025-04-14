import "./App.css";
function App() {
  return (
    <div className="main-container">
        <div className="hero-bg"></div>
        <div className="wrapper">
      <div className="navbar">
          <div className="navigation">
            <div className="logo-container">
              <img src="./src/assets/logo.svg" alt="logo" />
            </div>
            <div className="nav-links">
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
            <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
      </section>
      <section className="section section-two">
       
      </section>
      </div>
    </div>
  );
}

export default App;

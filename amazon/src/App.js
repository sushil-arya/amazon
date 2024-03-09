import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="s_header_top"></div>
        <div className="s_header_bottom"></div>
      </header>

      <div className="s_main">
        <div className="s_main1 position-relative">
          <div id="carouselExample" class="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="./images/slider/image_1.jpg"
                  className="d-block w-100"
                  alt="image1"
                />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/image_2.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/image_3.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/image_4.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/image_5.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/image_6.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./images/slider/image_7.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev h-50"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true">
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next h-50"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next">
              <span
                class="carousel-control-next-icon"
                aria-hidden="true">
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="s_main2 position-absolute w-100">

        </div>
      </div>

      <footer></footer>
    </div>
  );
}

export default App;

import "./styles/Bottomsec.css";
import "../App.css";

function Bottomsec() {
  return (
    <>
      <div className="service">
        <div className="service-content">
          <h1>Programming Languages We Learn</h1>
          <p>Ini adalah Beberapa Bahasa Pemrograman Yang Akan Kami Pelajari.</p>
        </div>
        <div className="service-cards">
          <div className="service-card">
            <h3 className="front">Frontend</h3>
            <ul>
              <li>
                <i className="fa-solid fa-plus"></i>HTML
              </li>
              <li>
                <i className="fa-solid fa-plus"></i>CSS
              </li>
              <li>
                <i className="fa-solid fa-plus"></i>PHP
              </li>
            </ul>
          </div>
          <div className="service-card">
            <h3 className="back">Backend</h3>
            <ul>
              <li>
                <i className="fa-solid fa-plus"></i>Python
              </li>
              <li>
                <i className="fa-solid fa-plus"></i>PHP
              </li>
              <li>
                <i className="fa-solid fa-plus"></i>Javascript
              </li>
            </ul>
          </div>
          <div className="service-card">
            <h3 className="db">Database</h3>
            <ul>
              <li>
                <i className="fa-solid fa-plus"></i>MySQL
              </li>
              <li>
                <i className="fa-solid fa-plus"></i>MongoDB
              </li>
              <li>
                <i className="fa-solid fa-plus"></i>PostgreSQL
              </li>
            </ul>
          </div>
        </div>
        <div className="circle"></div>
      </div>

      <section className="web-kami">
        <h1>Our Website</h1>
      </section>

      <div className="slide-container">
        <input id="slide1" type="radio" name="group" defaultChecked />
        <input id="slide2" type="radio" name="group" />
        <input id="slide3" type="radio" name="group" />
        <input id="slide4" type="radio" name="group" />
        <input id="slide5" type="radio" name="group" />
        <div className="dots">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
          <label htmlFor="slide4"></label>
          <label htmlFor="slide5"></label>
        </div>
        <div className="slider">
          <div
            className="slide"
            style={{
              backgroundImage:
                "url('/image assets/wallpaperflare.com_wallpaper (8).jpg')", // Ensure the path is correct
              backgroundSize: "cover", // Optional: Ensures the image covers the slide area
              backgroundPosition: "center", // Optional: Centers the image within the slide
            }}
          >
            <div className="content">
              <h2>WEB 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quidem sequi enim libero quaerat ab.
              </p>
              <div className="slide-link">
                <a href="#">See More</a>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url('/image assets/wallpaperflare.com_wallpaper (4).jpg')", // Adjust the path if needed
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="content">
              <h2>WEB 2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quidem sequi enim libero quaerat ab.
              </p>
              <div className="slide-link">
                <a href="#">See More</a>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url('/image assets/wallpaperflare.com_wallpaper (9).jpg')", // Adjust the path if needed
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="content">
              <h2>WEB 3</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quidem sequi enim libero quaerat ab.
              </p>
              <div className="slide-link">
                <a href="https://library-2-1qnf.vercel.app/">See More</a>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage:
                "url('/image assets/wallpaperflare.com_wallpaper (7).jpg')", // Adjust the path if needed
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="content">
              <h2>WEB 4</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quidem sequi enim libero quaerat ab.
              </p>
              <div className="slide-link">
                <a href="https://ww2-pied.vercel.app/">See More</a>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage: "url('/assets/perpus-hafiz.png')", // Adjust the path if needed
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="content">
              <h2>WEB 5</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quidem sequi enim libero quaerat ab.
              </p>
              <div className="slide-link">
                <a href="https://perpustakaan-sooty.vercel.app/">See More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bottomsec;

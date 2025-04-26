import "./styles/Hero.css";
import Profile from "../assets/pakikbal.jpg";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container1">
          <h1>SOFTWARE ENGINEERING CLASS X RPL 03</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quidem commodi laudantium excepturi. Sint a labore tempor?
          </p>
          <button>See More</button>
        </div>

        <div className="profile-pic">
          <img src={Profile} alt="Profile Picture" />
        </div>
      </section>

      <section className="about"></section>
    </>
  );
}

export default Hero;

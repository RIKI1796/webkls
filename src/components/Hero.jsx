import "./styles/Hero.css";
import Profile from "../assets/pakikbal.jpg";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container1">
          <h1>SOFTWARE ENGINEERING CLASS X RPL 03 24/25</h1>
          <p>
            Kelas X RPL 3 di SMK Krian 1 merupakan bagian dari jurusan Rekayasa
            Perangkat Lunak (RPL) yang fokus pada pemrograman, pengembangan
            aplikasi, dan teknologi informasi.
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

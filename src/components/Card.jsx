
import "./styles/Card.css";
import Ft from "../assets/ftclass.jpg";
import { useEffect } from "react";

function Card() {
  useEffect(() => {});
  return (
    <>
      <div className="wrapper">
        <div className="card-container">
          <div className="container">
            <input type="radio" name="slide" id="c1" />
            <label htmlFor="c1" className="card">
              <div className="row">
                <div className="icon">1</div>
                <div className="description">
                  <h4>Foto Bersama Di Hari Guru</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c2" />
            <label htmlFor="c2" className="card">
              <div className="row">
                <div className="icon">2</div>
                <div className="description">
                  <h4>Perayaan Hari Guru </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c3" />
            <label htmlFor="c3" className="card">
              <div className="row">
                <div className="icon">3</div>
                <div className="description">
                  <h4>Kunjungan Industri</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c4" defaultChecked />
            <label
              htmlFor="c4"
              className="card"
              style={{ backgroundImage: `url(${Ft})` }}
            >
              <div className="row">
                <div className="icon">4</div>
                <div className="description">
                  <h4>Foto Bersama</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c5" />
            <label htmlFor="c5" className="card">
              <div className="row">
                <div className="icon">5</div>
                <div className="description">
                  <h4>Snow Mountain</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c6" />
            <label htmlFor="c6" className="card">
              <div className="row">
                <div className="icon">6</div>
                <div className="description">
                  <h4>NIGGA</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </label>
            <input type="radio" name="slide" id="c7" />
            <label htmlFor="c7" className="card">
              <div className="row">
                <div className="icon">7</div>
                <div className="description">
                  <h4>White Rounds</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <section className="details">
        <h1>Details</h1>

        <p>
          Kelas X RPL 3 di SMK Krian 1 merupakan bagian dari jurusan Rekayasa
          Perangkat Lunak (RPL) yang fokus pada pemrograman, pengembangan
          aplikasi, dan teknologi informasi. Di kelas ini, siswa mempelajari
          berbagai bahasa pemrograman seperti HTML, CSS, dan Python, serta
          keterampilan penting lainnya seperti desain UI/UX dan algoritma.
          Mereka juga diajarkan dasar-dasar pengembangan website dan pemrograman
          berbasis web yang membantu mereka memahami cara kerja aplikasi di
          dunia nyata.
        </p>
        <br />
        <p>
          Siswa di kelas X RPL 3 dikenal kreatif dan terampil dalam ngoding
          serta desain. Mereka juga aktif dalam berbagai project dan selalu
          berusaha mengembangkan keterampilan di bidang teknologi informasi.
          Dengan semangat dan dedikasi yang besar, mereka mengusung motto:
          "Kodingan Boleh Error, Semangat Jangan Pernah Error!", yang menjadi
          pedoman mereka dalam menghadapi setiap tantangan di dunia pemrograman.
        </p>
      </section>
    </>
  );
}

export default Card;

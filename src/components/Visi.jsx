import "./styles/Visi.css";
import Profile from "../assets/pakikbal.jpg";
import Ketua from "../assets/china.jpg"

function Visi() {
  return (
    <>
      <section id="visi" className="visi-misi-section">
        <h1 className="section-title">Visi & Misi</h1>
        <div className="container-visi-misi">
          <div className="left-side">
            <h2 className="wali-kelas-text">Wali Kelas</h2>
            <div className="member-picture-box">
              <img
                className="member-picture"
                src={Profile}
                alt="Wali Kelas"
              />
            </div>
          </div>

          <div className="right-side">
            <div className="visi-misi-text">
              <h2 className="visi">Visi</h2>
              <p className="visi-text">"Makan Gak Makan Yang Penting Kumpul"</p>

              <h2 className="misi">Misi</h2>
              <p className="misi-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas quidem commodi laudantium excepturi. Sint a labore
                tempora?
              </p>
            </div>
          </div>
        </div>
        <div className="quote-box">
          <img className="visimisi-logo" src={Ketua} alt="Pak Ikbal" />
          <h2 className="text-visimisi">
            "Tetap patah semangat karena jodoh hanya di tangan tuhan"
            <br />
            -Ketua Kelas-
          </h2>
        </div>
      </section>
    </>
  );
}

export default Visi;

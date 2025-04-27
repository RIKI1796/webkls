import Foto from "../assets/china.jpg";
import "./styles/Siswa.css";
import Syafiq from "../assets/syafiq.jpg";
import Marcel from "../assets/marcel.jpg";
import Hafiz from "../assets/hafiz.jpg";
import Pakikbal from "../assets/pakikbal.jpg";
import Nafarriq from "../assets/nafarriq.png";
import Alif from "../assets/alif.jpg";

function Siswa() {
  const data = [
    { nama: "M. Ikbal.F", bagian: "Wali Kelas", image: Pakikbal },
    { nama: "Aryo Wicaksono", image: Foto },
    { nama: "Fairuz Zaidan", image: Foto },
    { nama: "Fajar Melfiano", image: Foto },
    { nama: "Fajjar Nafarriq", image: Nafarriq },
    { nama: "Ferby Indra", image: Foto },
    { nama: "Ghatfan Aufa", image: Foto },
    { nama: "Gibran Ahmad", image: Foto },
    { nama: "Giselli Adella", image: Foto },
    { nama: "Gusti Izza", image: Foto },
    { nama: "Hafiz Tri Septian", image: Hafiz },
    { nama: "Hanaya Nabitha", image: Foto },
    { nama: "Hisyaam Maulana", image: Foto },
    { nama: "Ibrahim Maulana", image: Foto },
    { nama: "Indah Diana", image: Foto },
    { nama: "Irfan Romadhoni", image: Foto },
    { nama: "Izzul Khaqqi", image: Foto },
    { nama: "Jaenal Abidin", image: Foto },
    { nama: "Jessica Dwi", image: Foto },
    { nama: "Jessika Ayu", image: Foto },
    { nama: "Jevika Febri", image: Foto },
    { nama: "Jimmy Adi", image: Foto },
    { nama: "Khomsa Tri", image: Foto },
    { nama: "Ladiva Amalaia", image: Foto },
    { nama: "Larasati Kurnia", image: Foto },
    { nama: "Luthfiana Silvi", image: Foto },
    { nama: "Syafiq Zakariyya", image: Syafiq },
    { nama: "Malik Hakim", image: Foto },
    { nama: "Marcellino Setya", image: Marcel },
    { nama: "Marvel Trey", image: Foto },
    { nama: "Maulidta Y.", image: Foto },
    { nama: "Maya Nur", image: Foto },
    { nama: "Miftakhul Putri", image: Foto },
    { nama: "Mila Nur", image: Foto },
    { nama: "Mirreal", image: Foto },
    { nama: "Galih Alanuari", image: Foto },
    { nama: "Moch. Hafid", image: Foto },
    { nama: "M. Novianto", image: Foto },
    { nama: "Alif Ramadhani", image: Alif },
  ];

  return (
    <div className="row gap-6 text-center">
      <span id="color"></span>
      <h1 style={{ marginTop: "10dvh" }}>
        Daftar Siswa Dan Wali Kelas X RPL 3:
      </h1>
      {data.map((item, index) => (
        <div
          key={index}
          className="card"
          style={{ width: "18rem", marginTop: "10dvh" }}
        >
          <img
            src={item.image}
            alt=""
            className="card-img-top"
            style={{ borderRadius: "10px", height: "40dvh" }}
          />
          <h1 style={{ fontSize: "30px", width: "100%", marginTop: "2dvh" }}>
            {item.nama}
          </h1>
          <h3 style={{ width: "100%", fontSize: "20px" }}> {item.nama === "M. Ikbal.F" ? "" : `Absen: ${index}`}</h3>
          <h4 style={{ width: "100%" }}>{item.bagian}</h4>
        </div>
      ))}
    </div>
  );
}

export default Siswa;

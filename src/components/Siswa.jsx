import Foto from "../assets/china.jpg";

function Siswa() {
  const data = [
    { nama: "Aryo Wicaksono", absen: 1 },
    { nama: "Fairuz Zaidan", absen: 2 },
    { nama: "Fajar Melfiano", absen: 3 },
    { nama: "Fajjar Nafarriq", absen: 4 },
    { nama: "Ferby Indra", absen: 5 },
    { nama: "Ghatfan Aufa Rizki", absen: 6 },
    { nama: "Gibran Ahmad", absen: 7 },
    { nama: "Giselli Adella", absen: 8 },
    { nama: "Gusti Izza", absen: 9 },
    { nama: "Hafiz Tri Septian", absen: 10 },
    { nama: "Hanaya Nabitha", absen: 11 },
    { nama: "Hisyaam Maulana", absen: 12 },
    { nama: "Ibrahim Maulana", absen: 13 },
    { nama: "Indah Diana", absen: 14 },
    { nama: "Irfan Romadhoni", absen: 15 },
    { nama: "Izzul Khaqqi", absen: 16 },
    { nama: "Jaenal Abidin", absen: 17 },
    { nama: "Jessica Dwi", absen: 18 },
    { nama: "Jessika Ayu", absen: 19 },
    { nama: "Jevika Febri", absen: 20 },
    { nama: "Jimmy Adi", absen: 21 },
    { nama: "Khomsa Tri", absen: 22 },
    { nama: "Ladiva Amalaia", absen: 23 },
    { nama: "Larasati Kurnia", absen: 24 },
    { nama: "Luthfiana Silvi", absen: 25 },
    { nama: "Syafiq Zakariyya", absen: 26 },
    { nama: "Malik Hakim", absen: 27 },
    { nama: "Marcellino Setya", absen: 28 },
    { nama: "Marvel Trey", absen: 29 },
    { nama: "Maulidta Y.", absen: 30 },
    { nama: "Maya Nur", absen: 31 },
    { nama: "Miftakhul Putri", absen: 32 },
    { nama: "Mila Nur", absen: 33 },
    { nama: "Mirreal", absen: 34 },
    { nama: "Galih Alanuari", absen: 35 },
    { nama: "Moch. Hafid", absen: 36 },
    { nama: "M. Novianto", absen: 37 },
    { nama: "Alif Ramadhani", absen: 38 },
  ];

  return (
    <div className="row" style={{ gap: "2rem", textAlign: "center" }}>
      <h1 style={{ marginTop: "10dvh" }}>Daftar Siswa X RPL 3:</h1>
      {data.map((item, index) => (
        <div
          key={index}
          className="card"
          style={{ width: "18rem", marginTop: "10dvh" }}
        >
          <img
            src={Foto}
            alt=""
            className="card-img-top"
            style={{ borderRadius: "10px", marginTop: "10px" }}
          />
          <h1 style={{ fontSize: "30px", width: "100%", marginTop: "2dvh" }}>
            {item.nama}
          </h1>
          <h3 style={{ width: "100%" }}>Absen: {item.absen}</h3>
        </div>
      ))}
    </div>
  );
}

export default Siswa;

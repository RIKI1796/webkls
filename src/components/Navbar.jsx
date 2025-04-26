import "./styles/Navbar.css";
function Navbar() {
  return (
    <>
      <header>
        <div className="logo">LOGO</div>
        <nav>
          <ul>
            <li>
              <a href="#about">Visi & Misi</a>
            </li>
            <li>
              <a href="/daftar-siswa">Daftar-Siswa</a>
            </li>
            <li>
              <a href="#mission">Pengurus Kelas</a>
            </li>
            <li>
              <a href="#details">Details</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

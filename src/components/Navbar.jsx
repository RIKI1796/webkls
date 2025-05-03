import "./styles/Navbar.css";
import { useEffect, useState } from "react";
function Navbar() {
  useEffect(() => {
    const tombol = document.getElementById('tombol');
    const list = document.getElementById('list');
    const cancel = document.createElement('span');
    cancel.textContent = "X";
    cancel.classList.add('menu');
    tombol.onclick = () => {
      list.style.transform = "translateX(0)";
      tombol.replaceWith(cancel);
    }
    cancel.onclick = () => {
      list.style.transform = "translateX(200px)";
      cancel.replaceWith(tombol);
    }
  });
  return (
    <>
      <header>
        <div className="logo">LOGO</div>
        <nav>
          <i id="tombol" className="bi bi-list menu"></i>
          <ul>
            <li>
              <a href="#visi">Visi & Misi</a>
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

      <div id="list" className="burgerlist">
        <ul>
          <li>
            <a href="#visi">Visi & Misi</a>
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
      </div>
    </>
  );
}

export default Navbar;

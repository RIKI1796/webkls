import Pages from "./pages/Pages.jsx";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Siswa from "./components/Siswa.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/daftar-siswa" element={<Siswa />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

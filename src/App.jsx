import axios from "axios";
import { useEffect, useState } from "react";
import ActorsList from "./component/ActorsList";
import ActressesList from "./component/ActressesList";
import logo from "./assets/hollywoodLogo.png"
import video from "./assets/video.mov"


function App() {
  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);
  const [filter, setFilter] = useState("");

  function fetchActor() {
    axios
      .get("https://www.freetestapi.com/api/v1/actors")
      .then((response) => setActors(response.data));
  }

  function fetchActresses() {
    axios
      .get("https://www.freetestapi.com/api/v1/actresses")
      .then((response) => setActresses(response.data));
  }

  useEffect(fetchActor, []);
  useEffect(fetchActresses, []);

  return (
    <>

      {/* MENU */}
      <nav className="navbar bg-light border-bottom border-body" data-bs-theme="dark">
        <div className="d-flex align-items-center justify-content-between w-100">
          {/* Logo a sinistra */}
          <div>
            <img className="logo" src={logo} alt="logo" />
          </div>

          {/* Titolo al centro */}
          <div className="mx-auto">
            <h1>Le star del cinema</h1>
          </div>

          {/* Filtro a destra */}
          <div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="form-select select-actors"
              aria-label="Default select example"
            >
              <option value="">----</option>
              <option value="actresses">Solo attrici</option>
              <option value="actors">Solo attori</option>
              <option value="all">Tutti</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Quando il filtro è vuoto, mostra un video  */}
      {filter === "" && (
        <div className="video-background">
          <video autoPlay muted loop className="video-background">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
      

      {/* filtro per attori, attrici o tutti gli attori */}
      {filter === "all" || filter === "actresses" ? <ActressesList actresses={actresses} /> : null}
      {filter === "all" || filter === "actors" ? <ActorsList actors={actors} /> : null}
    </>
  );
}

export default App;

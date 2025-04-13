import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);

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
      <div>
        <h1>Attori</h1>
      </div>
      <div className="card-group">
        {actors.map((actor) => (
          <div key={actor.id} className="card m-2" style={{ minWidth: "18rem" }}>
            <img src={actor.image} className="card-img-top actor-img" alt={actor.name} />
            <div className="card-body">
              <h5 className="card-title">{actor.name}</h5>
              <p className="card-text">Born in {actor.birth_year}</p>
              <p className="card-text">{actor.most_famous_movies}</p>
              <p className="card-text">{actor.awards}</p>
              <p className="card-text">{actor.biography}</p>
              <p className="card-text">
                <small>{actor.nationality}</small>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1>Attrici</h1>
      </div>
      <div className="card-group">
        {actresses.map((actres) => (
          <div key={actres.id} className="card m-2" style={{ minWidth: "18rem" }}>
            <img src={actres.image} className="card-img-top actor-img" alt={actres.name} />
            <div className="card-body">
              <h5 className="card-title">{actres.name}</h5>
              <p className="card-text">Born in {actres.birth_year}</p>
              <p className="card-text">{actres.most_famous_movies}</p>
              <p className="card-text">{actres.awards}</p>
              <p className="card-text">{actres.biography}</p>
              <p className="card-text">
                <small>{actres.nationality}</small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

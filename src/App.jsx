import axios from "axios"
import { useEffect, useState } from "react";

function App() {
  const [actors, setActor] = useState([])

  function fetchActor() {
    axios.get("https://www.freetestapi.com/api/v1/actresses")
      .then((response) => setActor(response.data))
  }

  useEffect(fetchActor, [])

  return (
    <>
    <div>
      <h1>Attrici</h1>
    </div>
      <div className="card-group">
        {actors.map((actor) => (
          <div key={actor.id} className="card m-2" style={{ minWidth: "18rem" }}>
            <img src={actor.image} className="card-img-top actor-img" alt={actor.name} />
            <div className="card-body">
              <h5 className="card-title">{actor.name}</h5>
              <p className="card-text">Born in{actor.birth_year}</p>
              <p className="card-text">{actor.most_famous_movies}</p>
              <p className="card-text">{actor.awards}</p>
              <p className="card-text">{actor.biography}</p>
              <p className="card-text">
                <small className="text-body-secondary">{actor.nationality}</small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>

      )
}

      export default App


{/* <>
   <ul>
     {actors.map((actor) =>(
      <li key={actor.id}>
        <h4>{actor.name}</h4>
        <p>{actor.birth_year}</p>
        <p>{actor.nationality}</p>
        <p>{actor.most_famous_movies}</p>
        <p>{actor.awards}</p>
        <p>{actor.biography}</p>
        <img src={actor.image} alt={actor.name} />
      </li>
    ))}
  </ul>
</> */}

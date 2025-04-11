import axios from "axios"
import { useEffect, useState } from "react";

function App() {
  const [actors, setActor] = useState([])

  function fetchActor(){
    axios.get("https://www.freetestapi.com/api/v1/actresses")
    .then((response) => setActor(response.data))
    
  }

  useEffect(fetchActor, [])

  return (
    <>
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
    </>
  )
}

export default App

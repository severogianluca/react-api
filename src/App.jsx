import axios from "axios";
import { useEffect, useState } from "react";
import ActorList from "./component/ActorsList";
import ActressesList from "./component/ActressesList";


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
    <ActorList  actors={actors}/>
    <ActressesList actresses={actresses}/>

    </>
  );
}

export default App;

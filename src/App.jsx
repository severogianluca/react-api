import axios from "axios"
import { use } from "react";
import { useEffect, useState } from "react";

function App() {
  const [actors, setActor] = useState([])

  function fecthActor(){
    axios.get("https://freetestapi.com/api/v1/actresses")
    .then((response) => setActor(response.data))
    
  }

  useEffect(fecthActor, [])

  return (
    <>

    </>
  )
}

export default App

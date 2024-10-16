import Navbar from "./components/Navbar"
import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import FetchCharacters from "./services/characters-service";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await FetchCharacters();
      setCharacters(data);
    };
    getCharacters();
  }, []);
  
  return (
    <>
      <Navbar brand="Rick and Morty App"/>
      <div className="container">
        <Characters characters={characters}/>
      </div>
    </>
    
  )
}

export default App

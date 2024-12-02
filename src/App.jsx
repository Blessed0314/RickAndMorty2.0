import Navbar from "./components/Navbar"
import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import FetchCharacters from "./services/characters-service";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const getCharacters = async (url) => {
    const data = await FetchCharacters(url);
    setCharacters(data.results);
    setInfo(data.info);
  };

  useEffect(() => {
    getCharacters(initialUrl);
  }, []);

  const onPrev = () => {
    getCharacters(info.prev);
  }

  const onNext = () => {
    getCharacters(info.next);
  }

  return (
    <>
      <Navbar brand="Rick and Morty App V3.0"/>
      <div className="container mt-3">
        <Pagination
          prev={info.prev} 
          next={info.next} 
          onPrev={onPrev} 
          onNext={onNext}
        />
        <Characters characters={characters}/>
      </div>
    </>
    
  )
}

export default App

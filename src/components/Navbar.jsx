import axios from "axios";
import React, { useEffect, useState } from "react";

const Navbar = ({ brand }) => {

  const [characters, setCharacters] = useState([]);

  const urlBase = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = async (url) => {
    await axios.get(url)
      .then((response) => {
        const data = response.data.results;
        setCharacters(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchCharacters(urlBase);
  }, [])
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/home">
          {brand}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

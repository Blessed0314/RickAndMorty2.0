import React from "react";
import CharacterData from "./CharacterData";

const Character = ({ character, index }) => {
  return (
    <div key={index} className="col mb-4">
      <div className="card" style={{ minWidth: "200px" }}>
        <img src={character.image} alt="" />
        <CharacterData 
          name={character.name}
          specie={character.species}
          location={character.location.name}
        />
      </div>
    </div>
  );
};

export default Character;

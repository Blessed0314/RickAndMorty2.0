import React from "react";
import Character from "./Character";

const Characters = ({ characters }) => {
  return (
    <div className="row">
      {characters &&
        characters.map((character, index) => (
          <Character 
            key={character.id}
            character={character} 
            index={index} 
          />
        ))}
    </div>
  );
};

export default Characters;

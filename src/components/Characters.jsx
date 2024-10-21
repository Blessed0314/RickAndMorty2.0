import React from "react";
import Character from "./Character";

const Characters = ({ characters }) => {
  return (
    <div className="row">
      {characters &&
        characters.map((character, index) => (
          <Character 
            key={character.id || index}
            character={character} 
          />
        ))}
    </div>
  );
};

export default Characters;

import React from "react";

const Character = ({ character, index }) => {
  return (
    <div key={index} className='col'>
      <div className="Card" style={{ minWidth: "180px" }}>
        <img src={character.image} alt="" />
      </div>
    </div>
  );
};

export default Character;

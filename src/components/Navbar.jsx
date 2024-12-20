import React from 'react';

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark" >
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/home">
          {brand}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

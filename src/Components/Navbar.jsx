import React from 'react';

const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand cursor-pointer">
          <span className="badge text-bg-warning fs-4"> NEWS</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <div
              onClick={() => setCategory('business')}
              className="nav-item cursor-pointer"
            >
              <a className="nav-link cursor-pointer">Business</a>
            </div>
            <div
              onClick={() => setCategory('sports')}
              className="nav-item cursor-pointer"
            >
              <a className="nav-link">Sports</a>
            </div>
            <div
              onClick={() => setCategory('entertainment')}
              className="nav-item cursor-pointer"
            >
              <a className="nav-link ">Entertainment</a>
            </div>
            <div
              onClick={() => setCategory('technology')}
              className="nav-item cursor-pointer"
            >
              <a className="nav-link ">Technology</a>
            </div>
            <div
              onClick={() => setCategory('health')}
              className="nav-item cursor-pointer"
            >
              <a className="nav-link ">Health</a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

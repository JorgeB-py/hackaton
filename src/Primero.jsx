import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Primero.css';

function Primero() {
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark reflexive-nav">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        
        {/* Reflejo del navbar */}
        <div className="reflected-navbar">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark reflexive-nav reflected">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
              </ul>
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Primero;

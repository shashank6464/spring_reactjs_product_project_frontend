//rafc used
import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
     
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BYMART.com
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div style={{ position: "fixed", left: "140px", float: "left" }}>
            <Link class="btn btn-outline-light" to="/">Home</Link></div>
          <div style={{ position: "fixed", left: "220px", float: "left" }}>

            <Link class="btn btn-outline-light" to="/about">About</Link></div>
          <div style={{ position: "fixed", right: "20px", float: "left" }}>
            <Link class="btn btn-outline-light" style={{ float: "left" }} to="/loginAsAdmin">Login As Admin</Link></div>
        </div>
      </nav>







    </div>
  )
}

export default NavBar

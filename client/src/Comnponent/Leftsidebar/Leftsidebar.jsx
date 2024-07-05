import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Leftsidebar/Leftsidebar.css";
import Globe from "../../assets/Globe.svg";

const Leftsidebar = ({ slidein }) => {
  const slideinstyle = {
    transform: "translateX(0%)",
  };

  const slideoutstyle = {
    transform: "translateX(-100%)",
  };

  return (
    <div className='left-sidebar' style={slidein ? slideinstyle : slideoutstyle}>
      <nav className='side-nav'>
        <button className='nav-btn'>
          <NavLink to='/' className='side-nav-links' activeClassName="active">
            <p>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button className='nav-btn'>
            <NavLink to='/Question' className="side-nav-links" activeClassName="active">
              <img src={Globe} alt="globe" />
              <p style={{ paddingLeft: "10px" }}>Questions</p>
            </NavLink>
          </button>
          <button className='nav-btn'>
            <NavLink to='/tags' className="side-nav-links" activeClassName="active" style={{ paddingLeft: "40px" }}>
              <p style={{ paddingLeft: "10px" }}>Tags</p>
            </NavLink>
          </button>
          <button className='nav-btn'>
            <NavLink to='/users' className="side-nav-links" activeClassName="active" style={{ paddingLeft: "40px" }}>
              <p style={{ paddingLeft: "10px" }}>Users</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Leftsidebar;
